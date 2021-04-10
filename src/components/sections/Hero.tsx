import { FC, useEffect } from 'react';
import HeroWord from '@components/containers/HeroWord';
import Icon from '@assets/icons';
import HeroSentence from '@components/containers/HeroSentence';
import { useSpring, animated } from 'react-spring';

const Hero: FC = () => {
  const [{ opacity }, animate] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    animate({
      opacity: 1,
      delay: 3000,
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative flex-col pt-12">
      <HeroWord />
      <HeroSentence />
      <animated.span
        style={{ opacity } as any}
        className="animate-bounce cursor-pointer pt-6"
      >
        <Icon name="arrow" />
      </animated.span>
    </div>
  );
};

export default Hero;
