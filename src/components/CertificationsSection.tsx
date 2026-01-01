import { Shield } from "lucide-react";
import certificationsImage from "@/assets/certifications-page.jpg";

const CertificationsSection = () => {
  const certifications = [
    { name: "Certificate of Incorporation" },
    { name: "Private Security Agencies (Regulation) Act 2005" },
    { name: "Employees' Provident Fund Organisation" },
    { name: "Employees' State Insurance Corporation" },
    { name: "PTEC & PTRC Registration" },
    { name: "ISO Certification" },
    { name: "Ministry of Micro, Small & Medium Enterprise" },
    { name: "GST Approved" },
    { name: "Shops and Establishments Act" },
    { name: "Startup India" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium uppercase tracking-wider mb-2">Our Credentials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications & Licenses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are fully licensed and certified to provide security services across Maharashtra.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Certifications Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-elegant border border-gold/20">
              <img 
                src={certificationsImage} 
                alt="Our Certifications - ISO, GST, PSARA, ESIC, EPF and more" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Certifications List */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-gold/40 transition-colors group flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <Shield className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <p className="text-sm text-foreground font-medium">{cert.name}</p>
                </div>
              ))}
            </div>

            {/* License Info */}
            <div className="bg-navy rounded-lg p-8">
              <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-6">
                <Shield className="w-6 h-6 text-gold" />
                <span className="text-gold font-semibold uppercase tracking-wider">Government Licensed</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-card mb-4">
                License No: PSA/L/31/MH/2025/OCT/3/5573
              </h3>
              <p className="text-steel-light text-sm">
                Licensed by the Controlling Officer for the State of Maharashtra to run the business of Private Security Agency in the Entire State. Valid from 06/10/2025 to 05/10/2030.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;