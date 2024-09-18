import React from 'react';

type CheckIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  viewBox?: string;
  [key: string]: any;
};
const CheckIcon: React.FC<CheckIconProps> = ({
  width = '24px',
  height = '24px',
  fill = 'none',
  viewBox = '0 0 24 24',
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
          d="M0.5 12C0.5 5.67614 5.67614 0.5 12 0.5C18.3239 0.5 23.5 5.67614 23.5 12C23.5 18.3239 18.3239 23.5 12 23.5C5.67614 23.5 0.5 18.3239 0.5 12Z"
          stroke="#C5CBE0"
          strokeLinecap="square"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0Z"
          fill="#389E0D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1813 7.11293C17.5607 7.434 17.6081 8.00188 17.287 8.38133L10.687 16.1813C10.5215 16.3769 10.2806 16.4927 10.0245 16.4996C9.76844 16.5066 9.52153 16.4042 9.34564 16.2179L5.94564 12.6179C5.60435 12.2566 5.62063 11.687 5.98199 11.3457C6.34336 11.0044 6.91297 11.0207 7.25427 11.382L9.96311 14.2502L15.9129 7.21863C16.234 6.83919 16.8019 6.79187 17.1813 7.11293Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default CheckIcon;
