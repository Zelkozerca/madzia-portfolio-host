import { FC, useRef } from 'react';
import { animated } from 'react-spring';
import { useAnimateBackground } from '@utils/useAnimateBackground';

const HeroWord: FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { x, y } = useAnimateBackground(elementRef, {
    dx: 5,
    dy: 5,
    delay: 1000,
  });

  return (
    <div className="flex-grow flex items-end justify-center">
      <div className="relative font-bold text-6xl sm:text-7xl md:text-8xl pointer-events-none">
        <div className="">
          <div className="flex justify-evenly">POR</div>
          <div className="flex justify-evenly tracking-wide">TFO</div>
          <div className="flex justify-evenly tracking-wide">LIO.</div>
        </div>
        <animated.div
          ref={elementRef}
          className="absolute top-0 left-0 text-yellow selection:bg-yellow"
          style={{ x, y, zIndex: -1 } as any}
        >
          <div className="flex justify-evenly">POR</div>
          <div className="flex justify-evenly tracking-wide">TFO</div>
          <div className="flex justify-evenly tracking-wide">LIO.</div>
        </animated.div>
      </div>
    </div>
  );
};

export default HeroWord;
