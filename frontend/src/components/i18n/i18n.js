import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            description: {
                part1: [
                    'Crop Losses due to diseases',
                    'Indian Farmers lose upto ₹ 90,000 crores annually',
                    '10 to 30 percent of crop production are lost due to diseases, pests and weeds thus, decreasing the productivity and affecting the economy of the country.',
                    'Get started',
                ]
              }
        }
      },
      hi: {
        translation: {
          description: {
            part1: [
                "रोगों के कारण फसल का नुकसान",
                "भारतीय किसानों को सालाना ₹90,000 करोड़ तक का नुकसान",
                "फसल उत्पादन का 10 से 30 प्रतिशत हिस्सा बीमारियों, कीटों और खरपतवारों के कारण नष्ट हो जाता है, जिससे उत्पादकता कम हो जाती है और देश की अर्थव्यवस्था प्रभावित होती है",
                "शुरू हो जाओ",
            ]
          }
        }
      },
    }
  });

export default i18n;
