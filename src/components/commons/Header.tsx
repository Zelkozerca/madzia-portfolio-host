import { FC } from 'react';

type Props = {
  type?: 'h1' | 'h2' | 'h3';
  color?: 'white' | 'black';
};

const Header: FC<Props> = ({ children, type = 'h2', color = 'white' }) => {
  const TagType = type;

  return (
    <TagType
      className={`text-xl md:text-2xl lg:text-3xl text-white
      ${color === 'white' && 'text-white'} 
      ${color === 'black' && 'text-black'}`}
    >
      {children}
    </TagType>
  );
};

export default Header;
