import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";
import heroTshirt from "@/assets/hero-tshirt.jpg";

interface HeroProps {
  language: "en" | "fa";
}

export const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "Premium Nike",
      subtitle: "Athletic T-Shirts",
      tagline: "Experience ultimate comfort and performance",
      shopButton: "Shop Collection",
      viewButton: "View All",
    },
    fa: {
      title: "تی‌شرت‌های نایک",
      subtitle: "پرمیوم ورزشی",
      tagline: "تجربه نهایت راحتی و عملکرد",
      shopButton: "خرید کنید",
      viewButton: "مشاهده همه",
    },
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-gradient-glow animate-pulse-glow" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={language === "fa" ? "text-right" : "text-left"}
          >
            <motion.h1
              className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t.title}
              </span>
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.subtitle}
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {t.tagline}
            </motion.p>

            <motion.div
              className={`flex gap-4 ${language === "fa" ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <ShoppingBag className="mr-2 h-5 w-5" />
                {t.shopButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="glass border-accent/20 hover:border-accent/50 transition-all">
                {t.viewButton}
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="relative animate-float"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              <img
                src={heroTshirt}
                alt="Nike Premium T-Shirt"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
