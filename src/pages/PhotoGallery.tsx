import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";

const PhotoGallery = () => {
  // Placeholder - photos will be added here
  const photos: { src: string; alt: string }[] = [];

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
            {photos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-40" />
                <p className="text-muted-foreground text-lg">
                  Photos coming soon...
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoGallery;
