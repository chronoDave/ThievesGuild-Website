import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Locales
import en from '../public/locale/en.json';
import nl from '../public/locale/nl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    resources: { en, nl },
    react: {
      useSuspense: false
    },
    fallbackLng: 'nl',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // React escapes by default
    }
  });

export default i18n;
