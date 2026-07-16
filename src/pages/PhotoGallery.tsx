import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/gallery/gallery-1.png";
import gallery2 from "@/assets/gallery/gallery-2.png";
import gallery3 from "@/assets/gallery/gallery-3.png";
import gallery4 from "@/assets/gallery/gallery-4.png";
import gallery5 from "@/assets/gallery/gallery-5.png";

const photos = [
  { src: gallery1, alt: "Security personnel at Yashwantrao Chavan College of Science, Kannad", caption: "College Security" },
  { src: gallery2, alt: "Security guard on duty at Krishna-Koyna bank", caption: "Bank Security" },
  { src: gallery3, alt: "Security personnel at Exotica by Deepak Builder", caption: "Residential Security" },
  { src: gallery4, alt: "Security guard at Venutai Chavan College, Karad", caption: "Campus Security" },
  { src: gallery5, alt: "Security at Vanitanjani Global Energy Pvt Ltd", caption: "Industrial Security" },
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % photos.length);
  };
  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="py-14 border-b border-gold/20">
          <div className="container mx-auto px-4 text-center">
            <Camera className="w-10 h-10 text-gold mx-auto mb-3" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gold mb-3">
              Photo Gallery
            </h1>
            <p className="text-steel-light text-base max-w-xl mx-auto">
              Our guards on duty across various client locations.
            </p>
          </div>
        </section>

        {/* Gallery — full images, no cropping */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="break-inside-avoid group cursor-pointer rounded-lg overflow-hidden border border-gold/10 hover:border-gold/50 transition-all duration-500 bg-navy-light animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                >
                  {/* Show full image — no aspect ratio constraint */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Caption bar */}
                  <div className="px-4 py-3 bg-navy-dark/80 border-t border-gold/10">
                    <span className="text-gold font-heading text-sm uppercase tracking-widest">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-gold hover:text-gold-light transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <p className="absolute bottom-6 text-gold font-heading text-lg uppercase tracking-wider">
            {photos[selectedIndex].caption}
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PhotoGallery;
