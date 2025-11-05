import { motion } from "framer-motion";
import { Wind, Droplet, Award, Feather } from "lucide-react";

interface FeaturesProps {
  language: "en" | "fa";
}

export const Features = ({ language }: FeaturesProps) => {
  const content = {
    en: {
      title: "Premium Features",
      features: [
        {
          icon: Wind,
          title: "Breathable Fabric",
          description: "Advanced mesh technology for maximum airflow",
        },
        {
          icon: Droplet,
          title: "Sweat-Resistant",
          description: "Quick-dry technology keeps you comfortable",
        },
        {
          icon: Award,
          title: "Official Nike Quality",
          description: "Authentic Nike products with warranty",
        },
        {
          icon: Feather,
          title: "Lightweight Comfort",
          description: "Premium cotton blend for all-day wear",
        },
      ],
    },
    fa: {
      title: "ویژگی‌های پرمیوم",
      features: [
        {
          icon: Wind,
          title: "پارچه تنفس‌پذیر",
          description: "تکنولوژی مش پیشرفته برای جریان هوای بیشتر",
        },
        {
          icon: Droplet,
          title: "مقاوم در برابر عرق",
          description: "تکنولوژی خشک شدن سریع برای راحتی شما",
        },
        {
          icon: Award,
          title: "کیفیت رسمی نایک",
          description: "محصولات اصل نایک با گارانتی",
        },
        {
          icon: Feather,
          title: "راحتی سبک",
          description: "ترکیب پنبه پرمیوم برای استفاده تمام روز",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {t.title}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-premium transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-16 h-16 mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <h3 className={`text-xl font-bold mb-3 ${language === "fa" ? "text-right" : "text-left"}`}>
                {feature.title}
              </h3>
              <p className={`text-muted-foreground ${language === "fa" ? "text-right" : "text-left"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
