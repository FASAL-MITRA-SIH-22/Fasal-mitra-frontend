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
  console.log(t('description.part1.0'));
  console.log(homeObjOne);
  homeObjOne["lngs"] = lngs;
  homeObjOne["t"] = t;
  homeObjOne["i18n"] = i18n;
  homeObjTwo["lngs"] = lngs;
  homeObjTwo["t"] = t;
  homeObjTwo["i18n"] = i18n;
  homeObjThree["lngs"] = lngs;
  homeObjThree["t"] = t;
  homeObjThree["i18n"] = i18n;

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