import { FC } from 'react';

const Paragraph: FC = ({ children }) => {
  return <p className="text-sm md:text-base lg:text-lg">{children}</p>;
};

export default Paragraph;
