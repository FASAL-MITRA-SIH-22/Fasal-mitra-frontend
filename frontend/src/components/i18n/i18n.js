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
                home: [
                    'Crop Losses due to diseases',
                    'Indian Farmers lose upto ₹ 90,000 crores annually',
                    '10 to 30 percent of crop production are lost due to diseases, pests and weeds thus, decreasing the productivity and affecting the economy of the country.',
                    'Get started',
                    'Aiding Indian Farmers',
                    'One-Stop Solution for Crop Related Issues',
                    'Detection and Reliable Solutions, Teleconsulting with Experts and a Community Forum for Farmers.',
                    'Get started',
                    'Problems faced by Farmers',
                    'Knowing the exact crop disease is important before treating it.',
                    'Not all farmers possess enough technological literacy to carry out independent research about crop diseases and their solutions; they’re often taken advantage of by traders who make them spend money on large quantities of unnecessary chemicals, pesticides and insecticides, which are detrimental to the soil and environment.',
                    'Get started',
                ]
              }
        }
      },
      hi: {
        translation: {
          description: {
            home: [
                "रोगों के कारण फसल का नुकसान",
                "भारतीय किसानों को सालाना ₹90,000 करोड़ तक का नुकसान",
                "फसल उत्पादन का 10 से 30 प्रतिशत हिस्सा बीमारियों, कीटों और खरपतवारों के कारण नष्ट हो जाता है, जिससे उत्पादकता कम हो जाती है और देश की अर्थव्यवस्था प्रभावित होती है",
                "शुरू हो जाओ",
                'भारतीय किसानों की सहायता करना',
                'फसल से संबंधित मुद्दों के लिए वन-स्टॉप समाधान',
                'पता लगाने और विश्वसनीय समाधान, विशेषज्ञों के साथ टेलीकंसल्टिंग और किसानों के लिए एक सामुदायिक मंच',
                "शुरू हो जाओ",
                'किसानों की समस्या',
                'उपचार करने से पहले फसल की सही बीमारी जानना जरूरी है।',
                'सभी किसानों के पास फसल रोगों और उनके समाधान के बारे में स्वतंत्र शोध करने के लिए पर्याप्त तकनीकी साक्षरता नहीं है; उनका अक्सर व्यापारियों द्वारा फायदा उठाया जाता है जो उन्हें बड़ी मात्रा में अनावश्यक रसायनों, कीटनाशकों और कीटनाशकों पर पैसा खर्च करते हैं, जो मिट्टी और पर्यावरण के लिए हानिकारक हैं।',      
                "शुरू हो जाओ",
            ]
          }
        }
      },
    }
  });

export default i18n;
