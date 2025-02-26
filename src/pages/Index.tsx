
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-vegas-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <div className="container mx-auto px-4 py-16 text-center">
        <img 
          src="/lovable-uploads/cc6b5a53-8e55-4660-af35-2bb2d8beb76b.png" 
          alt="Vegas Letras Logo"
          className="w-96 h-96 mx-auto object-contain" 
        />
        <p className="text-xl mt-6 text-white/80">
          Transformando momentos especiais em memórias luminosas e inesquecíveis.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
