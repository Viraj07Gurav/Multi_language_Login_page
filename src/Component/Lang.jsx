import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const languages = [
  "English", "Русский", "Português", "Español", "Italiano", "Polski", 
  "Indonesian", "Français", "Thai", "Tiếng Việt", "العربية", "Malay",
  "中文", "Türkçe", "日本語", "한국어", "فارسی", "Српски", "Română",
  "Hrvatski", "हिन्दी", "ελληνικά", "বাংলা", "Українська", "Pilipinas", "Kiswahili"
];

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);

    // Trigger language change using Google Translate widget
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang; // Set the language to the selected one
      select.dispatchEvent(new Event('change')); // Trigger the change event
    }

    setIsOpen(false);
  };

  // Load the Google Translate script when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.google) {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 border-none rounded-lg"
      >
   {selectedLanguage}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-70 bg-white rounded-2xl shadow-lg p-2 grid grid-cols-3 gap-2 z-10">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className="p-2 text-sm hover:bg-gray-100 rounded-md text-left"
            >
              {lang}
            </button>
          ))}
        </div>
      )}

      {/* Google Translate element */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}

export default LanguageDropdown;

