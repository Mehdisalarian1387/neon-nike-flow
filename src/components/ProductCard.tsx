import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  colors?: string[];
  language: "en" | "fa";
}

export const ProductCard = ({ image, name, price, colors = [], language }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = {
    en: {
      addToCart: "Add to Cart",
    },
    fa: {
      addToCart: "افزودن به سبد",
    },
  };

  const t = content[language];

  return (
    <motion.div
      className="group relative glass rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-8"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotateY: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-glow"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t.addToCart}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="glass border-accent/20 hover:border-accent/50"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Neon edge highlight */}
        <motion.div
          className="absolute inset-0 border-2 border-accent/0 rounded-2xl pointer-events-none"
          animate={{
            borderColor: isHovered ? "hsl(190 95% 55% / 0.5)" : "hsl(190 95% 55% / 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Product Info */}
      <div className={`p-6 ${language === "fa" ? "text-right" : "text-left"}`}>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          {price}
        </p>

        {/* Color options */}
        {colors.length > 0 && (
          <div className={`flex gap-2 ${language === "fa" ? "flex-row-reverse" : ""}`}>
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className="w-6 h-6 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
