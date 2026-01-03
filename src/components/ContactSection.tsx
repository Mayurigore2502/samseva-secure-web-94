import { useState } from "react";
import { Phone, Mail, MapPin, Send, User, MessageSquare, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
// Google Sheets Web App URL - Replace with your own Google Apps Script URL
// To set up: Create Google Sheet → Extensions → Apps Script → Deploy as Web App
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwc74ib3DNMAZ5exm_YiYNjpqOnEReIsej_0EYSjhicFQnmx8oirb3vN4K74vPnE0TU/exec";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Google Sheets
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        { label: "Pravin Thorat", value: "+91 9890728198" },
        { label: "Vishal Shewale", value: "+91 7350466011" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [{ label: "General Inquiries", value: "samseva83@gmail.com" }],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [{ label: "", value: "198 Near Post Office Banawadi, Tal-Karad, Dist-Satara, 415124, Maharashtra" }],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-card mb-4">Contact Us</h2>
          <p className="text-steel-light max-w-2xl mx-auto">
            Ready to secure what matters most? Contact us for a free consultation and customized security solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-muted border-border focus:border-gold"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-muted border-border focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-muted border-border focus:border-gold"
                  />
                </div>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="pl-10 bg-muted border-border focus:border-gold"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="pl-10 bg-muted border-border focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className="w-full font-heading uppercase tracking-wider"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-7 h-7 text-navy" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-gold mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="mb-1">
                      {detail.label && <span className="text-steel-light text-sm">{detail.label}: </span>}
                      <span className="text-card">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden mt-8 h-[250px] border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d74.1833!3d17.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc183a6a5555555%3A0x5555555555555555!2sBanawadi%2C%20Maharashtra%20415124!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Samseva Security Force Location - Banawadi, Karad"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
