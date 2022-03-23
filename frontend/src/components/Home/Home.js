import HeroSection from "./HeroSection/HeroSection"
import InfoSection from './InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './InfoSection/Data';

const Home = () => {
  return (
    <>
      <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home