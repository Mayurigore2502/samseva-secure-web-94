import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TransparentLogoProps = {
  src: string;
  alt: string;
  className?: string;
  /** RGB distance threshold to consider background (higher = removes more). */
  threshold?: number;
};

type RGB = { r: number; g: number; b: number };

function avgCornerColor(data: Uint8ClampedArray, w: number, h: number, x0: number, y0: number, size = 10): RGB {
  let r = 0,
    g = 0,
    b = 0,
    n = 0;
  const x1 = Math.min(w - 1, x0 + size);
  const y1 = Math.min(h - 1, y0 + size);
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const i = (y * w + x) * 4;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      n++;
    }
  }
  return { r: r / n, g: g / n, b: b / n };
}

function dist(a: RGB, r: number, g: number, b: number) {
  const dr = a.r - r;
  const dg = a.g - g;
  const db = a.b - b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

async function cutoutToTransparentPng(src: string, threshold: number) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = src;
  await img.decode();

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  const w = canvas.width;
  const h = canvas.height;

  const bgSamples: RGB[] = [
    avgCornerColor(data, w, h, 0, 0),
    avgCornerColor(data, w, h, w - 11, 0),
    avgCornerColor(data, w, h, 0, h - 11),
    avgCornerColor(data, w, h, w - 11, h - 11),
  ];

  const isBg = (p: number) => {
    const i = p * 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Only consider fully-opaque-ish pixels for background removal.
    const a = data[i + 3];
    if (a === 0) return true;

    let min = Infinity;
    for (const s of bgSamples) min = Math.min(min, dist(s, r, g, b));
    return min < threshold;
  };

  // Flood-fill background from edges so internal white parts of the logo stay intact.
  const visited = new Uint8Array(w * h);
  const stack: number[] = [];

  const pushIfBg = (x: number, y: number) => {
    const p = y * w + x;
    if (visited[p]) return;
    if (!isBg(p)) return;
    visited[p] = 1;
    stack.push(p);
  };

  for (let x = 0; x < w; x++) {
    pushIfBg(x, 0);
    pushIfBg(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    pushIfBg(0, y);
    pushIfBg(w - 1, y);
  }

  while (stack.length) {
    const p = stack.pop()!;
    const x = p % w;
    const y = Math.floor(p / w);

    if (x > 0) pushIfBg(x - 1, y);
    if (x < w - 1) pushIfBg(x + 1, y);
    if (y > 0) pushIfBg(x, y - 1);
    if (y < h - 1) pushIfBg(x, y + 1);
  }

  for (let p = 0; p < visited.length; p++) {
    if (!visited[p]) continue;
    data[p * 4 + 3] = 0;
  }

  ctx.putImageData(imageData, 0, 0);

  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Failed to export PNG"))), "image/png");
  });

  return URL.createObjectURL(blob);
}

export default function TransparentLogo({ src, alt, className, threshold = 45 }: TransparentLogoProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const lastObjectUrl = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const out = await cutoutToTransparentPng(src, threshold);
        if (cancelled) {
          URL.revokeObjectURL(out);
          return;
        }

        if (lastObjectUrl.current) URL.revokeObjectURL(lastObjectUrl.current);
        lastObjectUrl.current = out;
        setProcessedSrc(out);
      } catch {
        // If processing fails, fall back to original.
        setProcessedSrc(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [src, threshold]);

  useEffect(() => {
    return () => {
      if (lastObjectUrl.current) URL.revokeObjectURL(lastObjectUrl.current);
    };
  }, []);

  return (
    <img
      src={processedSrc ?? src}
      alt={alt}
      className={cn(className, processedSrc ? "" : "opacity-0")}
      decoding="async"
      draggable={false}
    />
  );
}
