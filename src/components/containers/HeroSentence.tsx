import { FC, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

const HeroWord: FC = () => {
  const [{ opacity }, animate] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    animate({
      opacity: 1,
      delay: 1500,
    });
  }, []);

  return (
    <animated.div
      className="flex flex-col flex-grow"
      style={{ opacity } as any}
    >
      <div className="border h-fill flex-grow border-white w-0 mx-auto my-2" />
      <div className="flex flex-col tracking-wider">
        <p>“Design is thinking made visual.”</p>
        <span className="self-end font-bold tracking-wider">Saul Bass</span>
      </div>
    </animated.div>
  );
};

export default HeroWord;
