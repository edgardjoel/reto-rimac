import React from 'react';

type HospitalLightIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  viewBox?: string;
  [key: string]: any;
};
const HospitalLightIcon: React.FC<HospitalLightIconProps> = ({
  width = '56px',
  height = '56px',
  fill = 'none',
  viewBox = '0 0 56 56',
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
          d="M28 16.0169H20.7331V8.75H15.1419V16.0169H7.875V21.6081H15.1419V28.875H20.7331V21.6081H28V16.0169Z"
          fill="url(#paint0_linear_12_156455)"
        />
        <path
          d="M48.9825 18.025L38.5 12.0553V7.875C38.5 4.4975 35.7525 1.75 32.375 1.75H11.375C7.9975 1.75 5.25 4.4975 5.25 7.875V13.3919H8.75V7.875C8.75 6.42688 9.92688 5.25 11.375 5.25H32.375C33.8231 5.25 35 6.42688 35 7.875V50.75H28V40.25H15.75V50.75H8.75V24.2331H5.25V50.75C5.25 52.6794 6.82063 54.25 8.75 54.25H47.25C49.1838 54.25 50.75 52.6838 50.75 50.75V21.0656C50.75 19.8078 50.0741 18.6462 48.9825 18.025ZM24.5 50.75H19.25V43.75H24.5V50.75ZM47.25 50.75H38.5V36.75H43.75V33.25H38.5V29.75H43.75V26.25H38.5V16.0825L47.25 21.0656V50.75Z"
          fill="url(#paint1_linear_12_156455)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_12_156455"
            x1="8.40148"
            y1="10.3295"
            x2="24.983"
            y2="26.911"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#F7052D" />
            <stop offset="0.85" stopColor="#CA5AFA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_12_156455"
            x1="5.25"
            y1="1.75"
            x2="36.0413"
            y2="61.7929"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.272135" stopColor="#34263B" />
            <stop offset="0.658079" stopColor="#13172C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HospitalLightIcon;
