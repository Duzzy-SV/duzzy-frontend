interface DuzzyLogoProps {
  className?: string;
  logoColor?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const DuzzyLogo = ({
  className = 'flex space-x-2 select-none cursor-pointer',
  logoColor = 'white',
  onClick,
}: DuzzyLogoProps) => {
  return (
    <div className={className} onClick={onClick}>
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: logoColor }}
      />
      <div
        className="text-center w-full text-6xl font-bold font-ubuntu"
        style={{ color: logoColor }}
      >
        Duzzy
      </div>
    </div>
  );
};

export default DuzzyLogo;
