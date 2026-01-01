import { 
  Building2, 
  Home, 
  Landmark, 
  Users, 
  Calendar, 
  Flame, 
  Sparkles,
  Factory,
  ShieldCheck
} from "lucide-react";
import servicesImage from "@/assets/services-page.jpg";
import servicesImage2 from "@/assets/services-page-2.jpg";
import segmentsImage from "@/assets/services-segments.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Factory,
      title: "Industrial Security",
      description: "Security for major companies, national and international corporates, high security zone installations, schools, institutions, departmental stores, shopping complexes, malls, and theaters."
    },
    {
      icon: Building2,
      title: "Commercial Security",
      description: "Training provided as per needs of commercial sector including malls, commercial complexes, BPOs, corporate retail outlets, and educational institutions."
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Business continuity plans covering physical, informative and personnel security. Emergency communication & evacuation plans to make your property safe and secure."
    },
    {
      icon: Landmark,
      title: "Banking & Non-Banking Security",
      description: "Superior security care taking facilities for ATMs/Banks. Highly professional staff for handling individual ATM/Bank needs with efficient and hassle-free services."
    },
    {
      icon: Users,
      title: "Bouncer / Bodyguard",
      description: "Security guards for clubs, bars and music venues. Monitoring, ID checking, crowd control, and property protection with professional conduct."
    },
    {
      icon: Calendar,
      title: "Event Security Management",
      description: "Protection and aid for attendees at events like conferences and concerts. Personnel patrol venue grounds and buildings with a perceiving eye."
    },
    {
      icon: Flame,
      title: "Fire Safety Squad",
      description: "Systematic, critical appraisal of fire hazards involving personnel, premises, services & operation methods. Ensuring occupational safety & health systems satisfy legal requirements."
    },
    {
      icon: Sparkles,
      title: "Housekeeping Services",
      description: "Commercial housekeeping services with high standards. Constantly striving to improve our already high standards to be the absolute best in the industry."
    },
    {
      icon: ShieldCheck,
      title: "Labour Supply",
      description: "We provide workforce for industries like Construction, MEP services, Contracting, Retail, FMCG, Hotels, Manufacturing, Hospitality, Security, Engineering, Restaurants & Catering."
    }
  ];

  return (
    <section id="services" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-card mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            We provide specialized security solutions which cater to the specific needs of our clients in various categories.
          </p>
        </div>

        {/* Customer Segments Image */}
        <div className="mb-16">
          <div className="rounded-lg overflow-hidden shadow-elegant border border-gold/20 max-w-4xl mx-auto">
            <img 
              src={segmentsImage} 
              alt="Customer Segments - Hospital, Jewelers, Hotel, Industrial, Bank, Pharma, Warehouse and more" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-navy-light/50 border border-gold/10 rounded-lg p-6 hover:border-gold/40 hover:bg-navy-light transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card mb-3">{service.title}</h3>
              <p className="text-steel-light text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Services Images Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-elegant border border-gold/20">
            <img 
              src={servicesImage} 
              alt="Commercial, Residential, Banking and Bouncer Security Services" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-elegant border border-gold/20">
            <img 
              src={servicesImage2} 
              alt="Event Security, Labour Supply, Fire Safety and Housekeeping Services" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Customer Segments Tags */}
        <div className="mt-16">
          <h3 className="font-heading text-2xl font-bold text-center text-gold mb-10 uppercase tracking-wider">
            Customer Segments We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Hospital", "Jewelers", "Hotel", "Residential", 
              "Health-Care Institute", "Industrial", "Automobiles", 
              "Warehouse", "Pharma", "Bank", "Production House", "Institute", "Construction"
            ].map((segment, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gold/10 border border-gold/30 rounded-full text-gold font-medium text-sm uppercase tracking-wider hover:bg-gold/20 transition-colors"
              >
                {segment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;