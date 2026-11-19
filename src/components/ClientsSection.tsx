import sbiLogo from "@/assets/clients/SBI_Logo.png";
import diagnopeinLogo from "@/assets/clients/Diagnopein_Diagnostic_Centre_logo.png";
import dietechLogo from "@/assets/clients/Dietech_Engineering_logo.jpg";
import kalburgiLogo from "@/assets/clients/Kalburgi_Udyog_logo.jpg";
import krishnaKoynaLogo from "@/assets/clients/Krishna_Koyna_Patsanstha_logo.jpg";
import siddharthPatilLogo from "@/assets/clients/Siddharth_Patil_Group_logo.jpg";
import synfraLogo from "@/assets/clients/Synfra_logo.jpg";
import trimurtiLogo from "@/assets/clients/Trimurti_Stampings_logo.jpg";
import ycCollegeLogo from "@/assets/clients/YC_college.jpg";
import vcCollegeLogo from "@/assets/clients/vc_college.jpg";
import vanitanjaniLogo from "@/assets/clients/Vanitanjani_Global_Energy.jpg";
import tataMotorsLogo from "@/assets/clients/Tata_Motors.png";

type LogoClient = {
  name: string;
  logo: string;
};

const ClientsSection = () => {
  const logoClients: LogoClient[] = [
    { name: "State Bank of India", logo: sbiLogo },
    { name: "Tata Motors", logo: tataMotorsLogo },
    { name: "Diagnopein Diagnostic Centre", logo: diagnopeinLogo },
    { name: "Dietech Engineering", logo: dietechLogo },
    { name: "Kalburgi Udyog", logo: kalburgiLogo },
    { name: "Krishna Koyana Patsanstha", logo: krishnaKoynaLogo },
    { name: "Siddharth Patil Group", logo: siddharthPatilLogo },
    { name: "Synfra", logo: synfraLogo },
    { name: "Trimurti Stampings Private Limited", logo: trimurtiLogo },
    { name: "Yashwantrao Chavan College of Science", logo: ycCollegeLogo },
    { name: "Venutai Chavhan College of Arts and Commerce", logo: vcCollegeLogo },
    { name: "Vanitanjani Global Energy Pvt Ltd", logo: vanitanjaniLogo },
  ];

  const textClients = [
    "Khodashi Power Plant",
    "Parshwnath Patsanstha",
    "Tatthastu Kidney Hospital",
    "Swami Hospital",
    "Titan",
    "Royal Enfield",
    "Brillent Academy College of Science",
    "Alpha Showroom",
    "Titen Showroom",
    "Anuraj Arcade",
  ];

  return (
    <section id="clients" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium uppercase tracking-wider mb-2">Trusted By</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Valued Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to serve leading businesses and institutions across Maharashtra.
          </p>
        </div>

        {/* Clients with logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {logoClients.map((client, index) => (
            <div
              key={client.name}
              className="bg-card rounded-lg border border-border p-5 h-28 flex flex-col items-center justify-center gap-2 hover:border-gold hover:shadow-gold transition-all"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-12 max-w-full object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <p className="font-medium text-foreground text-xs text-center leading-tight">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        {/* Clients without logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {textClients.map((client, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg border border-border hover:border-gold hover:shadow-gold transition-all text-center flex items-center justify-center min-h-[4.5rem]"
            >
              <p className="font-medium text-foreground text-xs leading-tight">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
