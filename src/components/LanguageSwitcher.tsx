import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  language: "en" | "fa";
  onLanguageChange: (lang: "en" | "fa") => void;
}

export const LanguageSwitcher = ({ language, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex gap-1 glass rounded-full p-1">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => onLanguageChange("en")}
          className="rounded-full h-8 px-4 text-xs"
        >
          EN
        </Button>
        <Button
          variant={language === "fa" ? "default" : "ghost"}
          size="sm"
          onClick={() => onLanguageChange("fa")}
          className="rounded-full h-8 px-4 text-xs"
        >
          فارسی
        </Button>
      </div>
    </div>
  );
};
