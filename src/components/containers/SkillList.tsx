import { FC, useRef } from 'react';
import { useAnimateBackground } from '@utils/useAnimateBackground';
import { animated } from 'react-spring';
import Header from '@components/commons/Header';
import Image from 'next/image';

type SkillType = {
  name: string;
  img: string;
};

type Props = {
  skill: {
    label: string;
    list: SkillType[];
  };
  dx: number;
  dy: number;
};

const SkillList: FC<Props> = ({ skill, dx, dy }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const { x, y } = useAnimateBackground(listRef, { dx, dy });

  return (
    <div
      className="flex flex-col relative text-black bg-white mt-4 mb-16 md:my-8  pb-4 mx-auto w-64"
      ref={listRef}
    >
      <h2 className="font-bold text-2xl py-6">{skill.label}</h2>
      {skill.list.map(({ name, img }) => (
        <div className="w-full my-4 w-10 h-10 p-4 flex items-center text-base">
          <div className="mr-4">
            <Image src={img} width={32} height={32} />
          </div>
          {name}
        </div>
      ))}
      <animated.div
        className="absolute top-0 left-0 w-full h-full bg-yellow"
        style={{ x, y, zIndex: -1 } as any}
      />
    </div>
  );
};

export default SkillList;
