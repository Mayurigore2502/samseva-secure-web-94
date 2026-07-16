import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Samseva Security Force — Security Services in Maharashtra</title>
        <meta name="description" content="Licensed security agency in Maharashtra offering industrial, commercial, residential, event security, bouncers and bodyguards 24/7." />
        <link rel="canonical" href="https://samsevasecurity.com/" />
        <meta property="og:title" content="Samseva Security Force — Security Services in Maharashtra" />
        <meta property="og:description" content="Licensed security agency in Maharashtra offering industrial, commercial, residential, event security, bouncers and bodyguards 24/7." />
        <meta property="og:url" content="https://samsevasecurity.com/" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <CertificationsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
