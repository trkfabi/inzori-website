import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { enTranslations } from "../locales/en/translations";
import { esTranslations } from "../locales/es/translations";

// Define the type for our translations
export type Translations = typeof enTranslations;

// Define the language context type
interface LanguageContextType {
  language: "en" | "es";
  translations: Translations;
  setLanguage: (lang: "en" | "es") => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Get language from localStorage or default to English
  const [language, setLanguageState] = useState<"en" | "es">(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as "en" | "es") || "en";
  });

  // Get translations based on current language
  const translations = language === "en" ? enTranslations : esTranslations;

  // Function to change language
  const setLanguage = (lang: "en" | "es") => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    translations,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
