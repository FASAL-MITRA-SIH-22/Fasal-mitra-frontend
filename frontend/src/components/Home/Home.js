import HeroSection from "./HeroSection/HeroSection"
import InfoSection from './InfoSection/InfoSection';
import { homeObjOne, homeObjTwo } from './InfoSection/Data';

const Home = () => {
  return (
    <>
      <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home