import { FC } from 'react';
import Header from '@components/commons/Header';
import { skills } from '@config';
import SkillList from '@components/containers/SkillList';

const Skills: FC = () => {
  return (
    <div className="w-full relative text-center md:py-28 sm:py-16 py-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-white">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-4">
        <SkillList skill={skills.ux} dx={20} dy={20} />
        <SkillList skill={skills.frontEnd} dx={-20} dy={-20} />
      </div>
    </div>
  );
};

export default Skills;
