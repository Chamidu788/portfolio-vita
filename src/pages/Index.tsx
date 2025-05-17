
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmailJSConfig from "@/components/EmailJSConfig";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Initialize EmailJS - Replace with your actual EmailJS credentials */}
      <EmailJSConfig 
        serviceId="YOUR_SERVICE_ID"
        templateId="YOUR_TEMPLATE_ID"
        userId="YOUR_USER_ID"
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
