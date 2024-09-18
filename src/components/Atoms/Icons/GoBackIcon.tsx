import React from 'react';

type GoBackIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  viewBox?: string;
  [key: string]: any;
};
const GoBackIcon: React.FC<GoBackIconProps> = ({
  width = '20px',
  height = '20px',
  fill = 'none',
  color = '#4F4FFF',
  viewBox = '0 0 20 20',
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
        <circle cx="10" cy="10" r="9" transform="rotate(90 10 10)" stroke={color} strokeWidth="2" />
        <path
          d="M7.55317 9.99995L10.8094 6.74683L11.6907 7.62808L9.32192 9.99995L11.6907 12.3718L10.8094 13.2531L7.55317 9.99995Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default GoBackIcon;
