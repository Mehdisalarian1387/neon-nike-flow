import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewsProps {
  language: "en" | "fa";
}

export const Reviews = ({ language }: ReviewsProps) => {
  const content = {
    en: {
      title: "Customer Reviews",
      subtitle: "What our customers say about Nike premium tees",
      reviews: [
        {
          name: "Michael Johnson",
          rating: 5,
          text: "Best athletic shirt I've ever owned. The quality is exceptional and it fits perfectly!",
        },
        {
          name: "Sarah Williams",
          rating: 5,
          text: "Love the breathable fabric! Perfect for my daily workouts. Highly recommend!",
        },
        {
          name: "David Chen",
          rating: 5,
          text: "Premium quality at a great price. The sweat-resistant technology really works!",
        },
      ],
    },
    fa: {
      title: "نظرات مشتریان",
      subtitle: "نظر مشتریان ما درباره تی‌شرت‌های پرمیوم نایک",
      reviews: [
        {
          name: "محمد رضایی",
          rating: 5,
          text: "بهترین تی‌شرت ورزشی که تا حالا داشتم. کیفیت فوق‌العاده و سایز عالی!",
        },
        {
          name: "سارا احمدی",
          rating: 5,
          text: "پارچه تنفس‌پذیرش عالیه! برای تمرین‌های روزانه‌ام کامله. پیشنهاد می‌کنم!",
        },
        {
          name: "علی کریمی",
          rating: 5,
          text: "کیفیت پرمیوم با قیمت عالی. تکنولوژی ضد عرق واقعا کار می‌کنه!",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-24 relative">
      <div className="container px-6">
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
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.map((review, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-premium transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Star rating */}
              <div className={`flex gap-1 mb-4 ${language === "fa" ? "flex-row-reverse" : ""}`}>
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              <p className={`text-foreground mb-6 ${language === "fa" ? "text-right" : "text-left"}`}>
                "{review.text}"
              </p>

              <p className={`font-bold text-accent ${language === "fa" ? "text-right" : "text-left"}`}>
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
