import React from 'react';

interface BrandDiamondProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const BrandDiamond: React.FC<BrandDiamondProps> = ({ 
  className = "w-3 h-3 text-gold-400", 
  size = 12,
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M6 0L12 6L6 12L0 6L6 0Z" />
    </svg>
  );
};

export default BrandDiamond;
