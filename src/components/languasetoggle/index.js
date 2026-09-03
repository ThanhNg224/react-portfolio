import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.resolvedLanguage || i18n.language || 'en';
  const isVi = currentLang.startsWith('vi');

  const toggleLanguage = () => {
    const newLang = isVi ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={isVi ? "Switch to English" : "Chuyển sang Tiếng Việt"}
    >
      {isVi ? 'English' : 'Tiếng Việt'}
    </button>
  );
};

export default LanguageToggle;
