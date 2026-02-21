import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, X } from "lucide-react";

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

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="bg-navy py-16">
          <div className="container mx-auto px-4 text-center">
            <Camera className="w-12 h-12 text-gold mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gold mb-4">
              Photo Gallery
            </h1>
            <p className="text-steel-light text-lg max-w-2xl mx-auto">
              A glimpse into our operations, team, and the professional security services we provide.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 120}ms`, animationFillMode: "both" }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <span className="text-gold font-heading text-lg uppercase tracking-wider">
                      {photo.caption}
                    </span>
                  </div>
                  {/* Gold border accent on hover */}
                  <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/60 rounded-xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-gold hover:text-gold-light transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-gold font-heading text-xl uppercase tracking-wider">
            {photos[selectedIndex].caption}
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PhotoGallery;
