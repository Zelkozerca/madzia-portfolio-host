import { FC } from 'react';
import Header from '@components/commons/Header';
import Image from 'next/image';
import { projects } from '@config';

const Projects: FC = () => {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-white">Projects</h2>
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 py-8 md:py-16">
        {projects.map(project => (
          <div className="bg-white relative h-64 m-2">
            <Image
              src={project.img}
              alt={`hobby-${project.name}`}
              layout="fill"
              objectFit="cover"
            />
            <a
              href={project.link}
              className="absolute bg-bgYellow text-black font-bold flex items-center justify-center w-full h-20 bottom-0 left-0"
            >
              <p>{project.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
