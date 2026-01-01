import { Award, Shield, Building, FileCheck, Receipt, Landmark, Factory, Rocket, ScrollText, Phone, Mail } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    { name: "Certificate of Incorporation", icon: ScrollText },
    { name: "Private Security Agencies Act 2005", icon: Shield },
    { name: "Employees' Provident Fund Organisation", icon: Landmark },
    { name: "Employees' State Insurance Corporation", icon: Building },
    { name: "PTEC & PTRC Registration", icon: Receipt },
    { name: "ISO Certification", icon: Award },
    { name: "Ministry of MSME", icon: Factory },
    { name: "GST Approved", icon: Receipt },
    { name: "Goods and Services Tax", icon: FileCheck },
    { name: "Shops and Establishments Act", icon: Building },
    { name: "Startup India", icon: Rocket },
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
          <p className="text-steel-light max-w-3xl mx-auto mb-8">
            Licensed by the Controlling Officer for the State of Maharashtra to run the business of Private Security Agency in the Entire State. Valid from 06/10/2025 to 05/10/2030.
          </p>

          {/* Contact Info */}
          <div className="border-t border-gold/20 pt-8">
            <h4 className="text-gold font-semibold uppercase tracking-wider mb-6">Contact Us</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <p className="text-steel-light text-sm">Pravin Thorat</p>
                  <a href="tel:+919890728198" className="text-card hover:text-gold transition-colors font-medium">
                    +91 9890728198
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <p className="text-steel-light text-sm">Vishal Shewale</p>
                  <a href="tel:+917350466011" className="text-card hover:text-gold transition-colors font-medium">
                    +91 7350466011
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <p className="text-steel-light text-sm">General Inquiries</p>
                  <a href="mailto:samseva83@gmail.com" className="text-card hover:text-gold transition-colors font-medium">
                    samseva83@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
