import React from 'react';

type PersonIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  viewBox?: string;
  [key: string]: any;
};
const PersonIcon: React.FC<PersonIconProps> = ({
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
          d="M13.1254 11.6256V12.8768C13.1254 13.7058 12.7961 14.5008 12.2099 15.0869C11.6238 15.6731 10.8287 16.0024 9.99978 16.0024C9.58932 16.0024 9.18289 15.9216 8.80367 15.7645C8.42446 15.6074 8.07989 15.3772 7.78965 15.0869C7.49941 14.7967 7.26918 14.4521 7.11211 14.0729C6.95503 13.6937 6.87419 13.2873 6.87419 12.8768V11.6256C6.87482 10.7968 7.20432 10.0022 7.79035 9.41618C8.37637 8.83015 9.17102 8.50065 9.99978 8.50002C10.8285 8.50065 11.6232 8.83015 12.2092 9.41618C12.7952 10.0022 13.1247 10.7968 13.1254 11.6256ZM16.251 20.3768V23.5024H3.75098V20.3768C3.75074 19.3844 3.98743 18.4062 4.44136 17.5237C4.89529 16.6412 5.55335 15.8798 6.36081 15.3028C6.7603 15.9018 7.30142 16.3931 7.93618 16.7329C8.57095 17.0728 9.27976 17.2508 9.99978 17.2512C10.7198 17.2508 11.4286 17.0728 12.0634 16.7329C12.6982 16.3931 13.2393 15.9018 13.6388 15.3028C14.4465 15.8796 15.1049 16.641 15.5593 17.5235C16.0136 18.406 16.2507 19.3842 16.251 20.3768ZM14.9998 19.7512H13.751V18.5024H12.4998V19.7512H11.251V21.0024H12.4998V22.2512H13.751V21.0024H14.9998V19.7512Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default PersonIcon;