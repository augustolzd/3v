import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language
function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  // Check if browser language starts with 'en' (en, en-US, en-GB, etc.)
  if (browserLang.startsWith('en')) {
    return 'en';
  }
  // Default to Spanish for all other languages
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Priority: localStorage > browser language > default (es)
    const saved = localStorage.getItem('language');
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
    return detectBrowserLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    const newLang: Language = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
