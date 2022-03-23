import React from 'react';
import {useState} from 'react';
import Video from './video/video.mp4';
import { Button } from './Button';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  }
  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </HeroBg>
          <HeroContent>
              <HeroH1>Crop disease detection made easy</HeroH1>
              <HeroP>
                  Sign up with us today!
              </HeroP>
              <HeroBtnWrapper>
                  <Button to='signup' onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary = 'true'
                  dark = 'true'
                  >
                      Get started {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
  );
};

export default HeroSection;