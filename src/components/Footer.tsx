import { Phone, Mail, MapPin } from "lucide-react";
import samsevaLogo from "@/assets/samseva-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <img 
                src={samsevaLogo} 
                alt="Samseva Security Force Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-steel-light text-sm leading-relaxed">
              Professional security services throughout Maharashtra. We secure what matters most - 24/7, 365 days a year.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Why Us", "Clients", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-steel-light hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a href="tel:9890728198" className="flex items-center gap-3 text-steel-light hover:text-gold transition-colors text-sm">
                <Phone className="w-4 h-4 text-gold" />
                +91 9890728198
              </a>
              <a href="mailto:samseva83@gmail.com" className="flex items-center gap-3 text-steel-light hover:text-gold transition-colors text-sm">
                <Mail className="w-4 h-4 text-gold" />
                samseva83@gmail.com
              </a>
              <div className="flex items-start gap-3 text-steel-light text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>198 Near Post Office Banawadi, Tal-Karad, Dist-Satara, 415124, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel text-sm">
            © {new Date().getFullYear()} Samseva Security Force Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-steel text-sm">
            Website: <a href="https://www.samsevasecurity.com" className="text-gold hover:underline">www.samsevasecurity.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
