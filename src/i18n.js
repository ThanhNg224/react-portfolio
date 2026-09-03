import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import viTranslation from './locales/vi/translation.json';

const getInitialLanguage = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('i18nextLng');
      if (saved && (saved.startsWith('vi') || saved.startsWith('en'))) {
        return saved.startsWith('vi') ? 'vi' : 'en';
      }
    }
  } catch (e) {
    // Fallback if localStorage is inaccessible
  }
  return 'en';
};

const initialLanguage = getInitialLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLanguage;
}

i18n.on('languageChanged', (lng) => {
  try {
    const normalized = lng && lng.startsWith('vi') ? 'vi' : 'en';
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('i18nextLng', normalized);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = normalized;
    }
  } catch (e) {
    // Fallback if localStorage is inaccessible
  }
});

export default i18n;
