import { useEffect, useRef, useState } from "react";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";

const useCountUp = (target: number, duration = 2000, startDelay = 600) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const timeout = setTimeout(() => {
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }, startDelay);
          observer.disconnect();
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startDelay]);

  return { count, ref };
};

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center" ref={ref}>
      <p className="font-heading text-4xl md:text-5xl font-bold text-gold">
        {count}
        {suffix}
      </p>
      <p className="text-steel-light text-sm uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
};

const stats = [
  { value: 24, suffix: "/7", label: "Service" },
  { value: 365, suffix: "", label: "Days" },
  { value: 100, suffix: "+", label: "Clients" },
  { value: 300, suffix: "+", label: "Guards" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">
              Licensed Security Agency Since 2022
            </span>
          </div>

          {/* Main Heading */}
          <p className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-card mb-4 animate-fade-in-up delay-100" aria-hidden="true">
            WE <span className="text-gradient-gold">SECURE</span>
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in-up delay-200">
            WHAT MATTERS MOST — Security Services in Maharashtra
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-steel-light mb-8 max-w-2xl animate-fade-in-up delay-300">
            Professional security services throughout Maharashtra. Trusted by leading corporations, industries, and institutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <Button 
              size="lg" 
              variant="secondary"
              className="font-heading uppercase tracking-wider text-lg px-8 py-6 animate-pulse-gold"
            >
              <a href="#contact">Contact Us</a>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-heading uppercase tracking-wider text-lg px-8 py-6 border-gold/50 text-gold hover:bg-gold/10"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up delay-500">
            {stats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
