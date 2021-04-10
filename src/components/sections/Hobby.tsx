import { FC } from 'react';
import Image from 'next/image';
import { hobbies } from '@config';

const Hobby: FC = () => {
  return (
    <div className="flex flex-col text-center sm:pb-12 sm:pt-6 pt-0 pb-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-white">Hobby</h2>
      <div className="w-full flex flex-wrap items-center justify-center py-8 md:py-16">
        {hobbies.map(hobby => (
          <div className="relative bg-yellow w-28 h-28 sm:w-40 sm:h-40 m-2">
            <Image
              src={hobby.img}
              alt={`hobby-${hobby.name}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bg-yellow flex items-center justify-center w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p>{hobby.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
