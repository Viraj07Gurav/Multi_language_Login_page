import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
  { code: 'pl', name: 'Polski' },
  { code: 'id', name: 'Indonesian' },
  { code: 'fr', name: 'Français' },
  { code: 'th', name: 'Thai' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'ar', name: 'العربية' },
  { code: 'ms', name: 'Malay' },
  { code: 'zh', name: '中文' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'fa', name: 'فارسی' },
  { code: 'sr', name: 'Српски' },
  { code: 'ro', name: 'Română' },
  { code: 'hr', name: 'Hrvatski' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'el', name: 'ελληνικά' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'uk', name: 'Українська' },
  { code: 'fil', name: 'Pilipinas' },
  { code: 'sw', name: 'Kiswahili' }
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 text-[#1e385b] "
      >
        
        {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"   className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24"><path fill="none" stroke="#183f74" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-70 bg-white  rounded-lg shadow-lg p-2 grid grid-cols-2 z-10 md:grid-cols-3">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="p-2 text-sm hover:bg-gray-100 rounded-md"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
