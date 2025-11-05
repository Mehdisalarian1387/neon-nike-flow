import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import tshirtBlack from "@/assets/tshirt-black.png";
import tshirtWhite from "@/assets/tshirt-white.png";
import tshirtGrey from "@/assets/tshirt-grey.png";
import tshirtNavy from "@/assets/tshirt-navy.png";
import tshirtRed from "@/assets/tshirt-red.png";

interface ProductsProps {
  language: "en" | "fa";
}

export const Products = ({ language }: ProductsProps) => {
  const content = {
    en: {
      title: "Featured Collection",
      subtitle: "Discover premium Nike athletic wear designed for peak performance",
    },
    fa: {
      title: "کلکسیون ویژه",
      subtitle: "لباس‌های ورزشی پرمیوم نایک برای عملکرد عالی",
    },
  };

  const t = content[language];

  const products = [
    {
      image: tshirtBlack,
      name: language === "en" ? "Classic Black Tee" : "تی‌شرت مشکی کلاسیک",
      price: language === "en" ? "$45" : "۴۵ دلار",
      colors: ["#000000", "#FFFFFF", "#808080"],
    },
    {
      image: tshirtWhite,
      name: language === "en" ? "Pure White Essential" : "تی‌شرت سفید اساسی",
      price: language === "en" ? "$42" : "۴۲ دلار",
      colors: ["#FFFFFF", "#000000", "#1E3A8A"],
    },
    {
      image: tshirtGrey,
      name: language === "en" ? "Premium Grey Athletic" : "تی‌شرت خاکستری پرمیوم",
      price: language === "en" ? "$48" : "۴۸ دلار",
      colors: ["#808080", "#000000", "#DC2626"],
    },
    {
      image: tshirtNavy,
      name: language === "en" ? "Navy Performance Tee" : "تی‌شرت سرمه‌ای عملکردی",
      price: language === "en" ? "$46" : "۴۶ دلار",
      colors: ["#1E3A8A", "#FFFFFF", "#000000"],
    },
    {
      image: tshirtRed,
      name: language === "en" ? "Crimson Sport Edition" : "تی‌شرت قرمز ورزشی",
      price: language === "en" ? "$50" : "۵۰ دلار",
      colors: ["#DC2626", "#FFFFFF", "#808080"],
    },
  ];

  return (
    <section className="py-24 relative" id="products">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="container relative z-10 px-6">
        <motion.div
          className={`text-center mb-16 ${language === "fa" ? "text-right" : "text-left"}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard {...product} language={language} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
