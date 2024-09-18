import React from 'react';

type HouseIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  viewBox?: string;
  [key: string]: any;
};
const HouseIcon: React.FC<HouseIconProps> = ({
  width = '20px',
  height = '26px',
  fill = 'none',
  viewBox = '0 0 20 26',
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
          d="M15 12.8768H12.5V15.3768H11.2512V7.87439H3.7512V16.3367C3.37118 16.5558 3.05551 16.871 2.83589 17.2508C2.61627 17.6305 2.50043 18.0613 2.5 18.5V23.5024H6.2512V20.3768H8.75119V23.5024H17.5V15.3839C17.5009 15.055 17.437 14.7292 17.3118 14.425C17.1865 14.1209 17.0025 13.8444 16.7703 13.6115C16.5381 13.3786 16.2621 13.1938 15.9584 13.0678C15.6546 12.9417 15.3289 12.8768 15 12.8768ZM10 12.8768H8.1256V14.7512H6.87441V12.8768H5V11.6256H6.87441V9.75118H8.1256V11.6256H10V12.8768ZM15.6256 20.9952H11.8744V19.7512H15.6328L15.6256 20.9952ZM15.6256 18.4952H11.8744V17.2512H15.6328L15.6256 18.4952ZM15.6256 15.9952H13.7512V14.7512H15.6328L15.6256 15.9952Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default HouseIcon;
