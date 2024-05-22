import React from 'react';
import Logo from '@/assets/logo.svg';
import LogoImage from '@/assets/logo.png';

export interface SampleComponentProps {
  text: string;
}

const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => {
  return (
    <div>
      <div className="p-4 bg-blue-500 text-white">{text}</div>
      <Logo width={100} height={100} />
      <img src={LogoImage} alt="Sample" />
    </div>
  );
};

export default SampleComponent;
