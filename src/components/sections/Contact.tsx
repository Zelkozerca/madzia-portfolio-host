import { FC } from 'react';
import Icon from '@assets/icons';

const Contact: FC = () => {
  return (
    <div className="flex flex-col text-center h-viewport flex flex-col items-center justify-center">
      <h3 className="text-yellow text-2xl lg:font-semibold mb-8">
        Send me a message
      </h3>
      <a
        href="mailto:zelekux@gmail.com"
        className="flex items-center tracking-wider"
      >
        <span className="inline-flex mr-5 transform scale-150">
          <Icon name="mail" />
        </span>
        zelekux@gmail.com
      </a>
    </div>
  );
};

export default Contact;
