import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Locales
import en from '../public/locale/en.json';
import nl from '../public/locale/nl.json';

i18n
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: 'en',
    resources: { en, nl },
    react: {
      useSuspense: false
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false // React escapes by default
    }
  });

export default i18n;
