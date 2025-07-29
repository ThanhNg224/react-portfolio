import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'Tiếng Việt' : 'English'}
    </button>
  );
};

export default LanguageToggle;
