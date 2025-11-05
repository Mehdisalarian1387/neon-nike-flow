import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  language: "en" | "fa";
}

export const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      copyright: "© 2025 Nike Premium Store. All rights reserved.",
      followUs: "Follow Us",
    },
    fa: {
      copyright: "© ۲۰۲۵ فروشگاه پرمیوم نایک. تمامی حقوق محفوظ است.",
      followUs: "ما را دنبال کنید",
    },
  };

  const t = content[language];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="relative border-t border-border/50 py-12 mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
      
      <div className="container relative z-10 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              NIKE
            </h3>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">{t.followUs}</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {t.copyright}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
