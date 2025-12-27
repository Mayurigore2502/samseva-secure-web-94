import { 
  Star, 
  Search, 
  UserCheck, 
  Moon, 
  FileText, 
  Building,
  Target,
  Rocket,
  Heart
} from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Star,
      title: "Highly Prioritized Service",
      description: "Highly prioritized status to all our valued clients by paying more attention and going the extra mile."
    },
    {
      icon: Search,
      title: "Risk Assessment Survey",
      description: "We conduct detailed Risk Assessment Survey of the site and submit our Report and Suggestions."
    },
    {
      icon: UserCheck,
      title: "Stringent Recruitment",
      description: "Stringent Recruitment Process in Guard Selections with Police verification acknowledgment copy provided within 15 days."
    },
    {
      icon: Moon,
      title: "Surprise Night Rounds",
      description: "Surprise Night rounds and regular, un-scheduled visits by Area Officers and Senior Management team."
    },
    {
      icon: FileText,
      title: "Monthly MIS Details",
      description: "Monthly MIS details with all the required attached reports shared with clients along with 24×7 support."
    },
    {
      icon: Building,
      title: "Government Relations",
      description: "Reasonable contact with Government Body, Bureaucrats, and Law Officials if required."
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Samseva Difference
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-card border border-border hover:shadow-elegant transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Vision, Mission, Policy */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-navy p-8 rounded-lg text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-navy" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">Our Vision</h3>
            <p className="text-steel-light leading-relaxed">
              We strive to be the industry leader in security services that provides innovative and unique solutions.
            </p>
          </div>

          <div className="bg-navy p-8 rounded-lg text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-navy" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">Our Mission</h3>
            <p className="text-steel-light leading-relaxed">
              We strive to enhance the wellbeing of the clients' growth, business interests by maintaining a safe and secure environment.
            </p>
          </div>

          <div className="bg-navy p-8 rounded-lg text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-navy" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">Client First</h3>
            <p className="text-steel-light leading-relaxed">
              Our sophisticated, yet economically feasible security solutions are designed to identify and prevent risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
