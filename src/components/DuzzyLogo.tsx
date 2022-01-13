import { MouseEvent } from 'react';

interface DuzzyLogoProps {
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const DuzzyLogo = ({ onClick }: DuzzyLogoProps) => {
  return (
    <div
      className="flex space-x-2 select-none cursor-pointer"
      onClick={onClick}
    >
      <div className="w-3 h-3 rounded-full bg-white" />
      <div className="text-center w-full text-6xl text-white font-bold font-ubuntu">
        Duzzy
      </div>
    </div>
  );
};

export default DuzzyLogo;
