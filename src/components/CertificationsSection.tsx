import { Award, BadgeCheck, Shield, Building, FileCheck } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    { name: "Certificate of Incorporation", icon: FileCheck },
    { name: "Private Security Agencies Act 2005", icon: Shield },
    { name: "Employees' Provident Fund Organisation", icon: Building },
    { name: "Employees' State Insurance Corporation", icon: Building },
    { name: "PTEC & PTRC Registration", icon: BadgeCheck },
    { name: "ISO Certification", icon: Award },
    { name: "Ministry of MSME", icon: Building },
    { name: "GST Approved", icon: BadgeCheck },
    { name: "Goods and Services Tax", icon: FileCheck },
    { name: "Shops and Establishments Act", icon: FileCheck },
    { name: "Startup India", icon: Award },
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-lg border border-border hover:border-gold/40 transition-colors text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/10 transition-colors">
                <cert.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
              </div>
              <p className="text-sm text-foreground font-medium">{cert.name}</p>
            </div>
          ))}
        </div>

        {/* License Info */}
        <div className="mt-12 bg-navy rounded-lg p-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-6">
            <Shield className="w-6 h-6 text-gold" />
            <span className="text-gold font-semibold uppercase tracking-wider">Government Licensed</span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-card mb-4">
            License No: PSA/L/31/MH/2025/OCT/3/5573
          </h3>
          <p className="text-steel-light max-w-3xl mx-auto">
            Licensed by the Controlling Officer for the State of Maharashtra to run the business of Private Security Agency in the Entire State. Valid from 06/10/2025 to 05/10/2030.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
