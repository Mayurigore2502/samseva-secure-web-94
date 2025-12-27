const ClientsSection = () => {
  const clients = [
    "Titan",
    "Synfra",
    "Synergy SKI Infradevelopment",
    "The Satara Sahakari Bank Ltd.",
    "Patel Ahuja",
    "Peter England",
    "Donin's Royal",
    "Royal Enfield",
    "Brillent Academy College of Science",
    "Krishna Koyana Patsanstha",
    "Silver Palm & Silver Garden",
    "Exotica 1 Apartment",
    "Amit Executive Hotel",
    "Alpha Showroom",
    "Vrundavan City",
    "Titen Showroom",
    "Anuraj Arcade"
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

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-gold hover:shadow-gold transition-all text-center"
            >
              <p className="font-medium text-foreground text-sm">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
