import { FC, useRef } from 'react';
import Image from 'next/image';
import { animated } from 'react-spring';
import Header from '@components/commons/Header';
import Icon from '@assets/icons';
import { useAnimateBackground } from '@utils/useAnimateBackground';

const About: FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const { x, y } = useAnimateBackground(imageRef, { dx: 20, dy: 20 });

  return (
    <div className="w-full flex-grow flex flex-col md:flex-row items-center justify-center sm:pt-16 md:pt-24 pt-8 my-12 relative">
      <div className="w-full sm:w-half">
        <div
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto"
          ref={imageRef}
        >
          <Image src="/images/pelikan.jpg" layout="fill" objectFit="cover" />
          <animated.div
            style={{ x, y, zIndex: -1 } as any}
            className="w-full h-full top-0 left-0 bg-yellow absolute"
          />
        </div>
      </div>
      <div className="w-full mx-auto max-w-xl md:w-half py-12 px-8 md:px-12 flex flex-col">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white">
          <strong>Hi I&apos;m Mg</strong>
        </h2>
        <ul className="py-8">
          <li>
            <strong>Age:</strong> 22
          </li>
          <li>
            <strong>Profile:</strong> UX Designer
          </li>
          <li className="flex items-center">
            <span className="inline-flex mr-2">
              <Icon name="mail" />
            </span>
            <a href="mailto:zelekux@gmail.com">zelekux@gmail.com</a>
          </li>
        </ul>
        <p className="tracking-wide">
          For 5 years I have been working and developing in the IT industry. I
          am a conscientious person determined to achieve my goals.
        </p>
      </div>
    </div>
  );
};

export default About;
