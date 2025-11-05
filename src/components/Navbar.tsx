import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  language: "en" | "fa";
  onLanguageChange: (lang: "en" | "fa") => void;
}

export const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer">
              NIKE
            </h1>
          </motion.div>

          {/* Right side actions */}
          <div className="flex items-center gap-6">
            <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
            
            <Button variant="outline" size="icon" className="glass border-accent/20 hover:border-accent/50 relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-xs flex items-center justify-center text-primary-foreground">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
