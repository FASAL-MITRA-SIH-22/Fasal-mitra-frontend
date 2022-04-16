import HeroSection from "./HeroSection/HeroSection"
import InfoSection from './InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './InfoSection/Data';

import { useTranslation, Trans } from 'react-i18next';


const Home = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'English' },
    hi: { nativeName: 'Hindi' },
  };
  homeObjOne["t"] = t('description.home', {returnObjects: true}).slice(0, 4);
  homeObjTwo["t"] = t('description.home', {returnObjects: true}).slice(4, 8);
  homeObjThree["t"] = t('description.home', {returnObjects: true}).slice(8, 12);

  return (
    <>
      <HeroSection />
      {Object.keys(lngs).map((lng) => (
        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          {lngs[lng].nativeName}
        </button>
      ))}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home