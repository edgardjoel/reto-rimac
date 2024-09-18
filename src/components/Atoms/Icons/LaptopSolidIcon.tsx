import React from 'react';

type LaptopSolidIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  viewBox?: string;
  [key: string]: any;
};
const LaptopSolidIcon: React.FC<LaptopSolidIconProps> = ({
  width = '20px',
  height = '20px',
  fill = 'none',
  viewBox = '0 0 20 20',
  color = '#03050F',
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5063 13.775V6.25C17.5063 5.21875 16.6625 4.375 15.6313 4.375H4.36875C3.3375 4.375 2.49375 5.21875 2.49375 6.25V13.775H0.625V15.65C0.625 16.6813 1.46875 17.525 2.5 17.525H17.5C18.5312 17.525 19.375 16.6813 19.375 15.65V13.775H17.5063ZM10 6.25C10.3438 6.25 10.625 6.53125 10.625 6.875C10.625 7.21875 10.3438 7.5 10 7.5C9.65625 7.5 9.375 7.21875 9.375 6.875C9.375 6.53125 9.65625 6.25 10 6.25ZM18.125 15.65C18.125 15.9938 17.8438 16.275 17.5 16.275H2.5C2.15625 16.275 1.875 15.9938 1.875 15.65V15.025H7.5C7.5 15.3688 7.78125 15.65 8.125 15.65H11.875C12.2188 15.65 12.5 15.3688 12.5 15.025H18.125V15.65Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default LaptopSolidIcon;
