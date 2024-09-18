import React from 'react';

type LineIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  viewBox?: string;
  [key: string]: any;
};
const LineIcon: React.FC<LineIconProps> = ({
  width = '32px',
  height = '24px',
  fill = 'none',
  color = '#4F4FFF',
  viewBox = '0 0 32 24',
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
        <line
          x1="1"
          y1="11"
          x2="31"
          y2="11"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 8"
        />
      </svg>
    </div>
  );
};

export default LineIcon;
