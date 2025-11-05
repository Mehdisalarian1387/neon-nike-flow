import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Features } from "@/components/Features";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "fa">("en");

  return (
    <div className={`min-h-screen ${language === "fa" ? "rtl font-[vazir]" : "ltr"}`}>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Products language={language} />
      <Features language={language} />
      <Reviews language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
