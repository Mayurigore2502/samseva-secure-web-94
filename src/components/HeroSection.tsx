import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-guard.jpg";

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
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-card mb-4 animate-fade-in-up delay-100">
            WE <span className="text-gradient-gold">SECURE</span>
          </h1>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in-up delay-200">
            WHAT MATTERS MOST
          </h2>

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
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up delay-500">
            <div className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gold">24/7</p>
              <p className="text-steel-light text-sm uppercase tracking-wider mt-1">Service</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gold">365</p>
              <p className="text-steel-light text-sm uppercase tracking-wider mt-1">Days</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gold">100+</p>
              <p className="text-steel-light text-sm uppercase tracking-wider mt-1">Clients</p>
            </div>
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
