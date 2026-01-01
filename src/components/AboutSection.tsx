import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-page.jpg";

const AboutSection = () => {
  const highlights = [
    "Established in 2022 by trained servicemen",
    "Top quality service across Maharashtra",
    "Highly trained & verified security guards",
    "24×7×365 days service availability",
    "Fully insured and bonded personnel",
    "Government liaisons & consultancy",
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={aboutImage} 
                alt="Security control room" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-navy p-6 rounded-lg shadow-elegant hidden md:block">
              <p className="font-heading text-4xl font-bold text-gold">3+</p>
              <p className="text-steel-light text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <p className="text-gold font-medium uppercase tracking-wider mb-2">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Security<br />
              <span className="text-navy">You Can Trust</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Samseva Security Force is established in 2022, run by a group of servicemen and trained post graduates. We stand tall for our quality service among the top security providers in Maharashtra. We are dedicated to providing efficient and professional security services throughout India.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We appreciate that each client has a distinctive risk profile and therefore have varied physical security requirements. Our team meets these requirements in a professional way, uniquely suited to the client's profile and specific business needs.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Management */}
            <div className="mt-10 p-6 bg-card rounded-lg shadow-card border border-border">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 uppercase tracking-wider">
                Our Management
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="font-heading font-bold text-navy">PT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Pravin Thorat</p>
                    <p className="text-sm text-muted-foreground">Director</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="font-heading font-bold text-navy">VS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Vishal Shewale</p>
                    <p className="text-sm text-muted-foreground">Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
