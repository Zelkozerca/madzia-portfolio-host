import dynamic from 'next/dynamic';

export type IconComponentPropsType = React.SVGProps<SVGSVGElement> & {
  color: string;
  size: string | number;
};

export type IconType = 'arrow' | 'linkedin' | 'mail';

const icons = {
  arrow: dynamic(() => import(`@assets/icons/Arrow`)),
  mail: dynamic(() => import(`@assets/icons/Mail`)),
  linkedin: dynamic(() => import(`@assets/icons/Linkedin`)),
};

interface PropsInterface {
  name: IconType;
}
const Icon = ({ name }: PropsInterface): JSX.Element => {
  const IconComponent = icons[name];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <IconComponent />;
};

export default Icon;
