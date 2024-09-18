export type PinkColorImgProps = {
  width?: string;
  height?: string;
  fill?: string;
  fill2?: string;
  [key: string]: any; // Para permitir cualquier otra propiedad adicional
};

const PinkColorImg = ({
  width = '432px',
  height = '768px',
  fill = '#D9D9D9',
  fill2 = '#C333FF',
  ...props
}: PinkColorImgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 432 768"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_12_155786"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-63"
        width="432"
        height="1088"
      >
        <rect y="-63" width="432" height="1088" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_12_155786)">
        <g filter="url(#filter0_f_12_155786)">
          <ellipse
            cx="92.1051"
            cy="94.6542"
            rx="92.1051"
            ry="94.6542"
            transform="matrix(0.999038 0.0438523 -0.0415179 0.999138 -21.803 604.302)"
            fill={fill2}
          />
          <ellipse
            cx="118.738"
            cy="122.024"
            rx="118.738"
            ry="122.024"
            transform="matrix(0.999038 0.0438523 -0.0415179 0.999138 -192.756 361.648)"
            fill={fill2}
          />
          <ellipse
            cx="135.383"
            cy="139.13"
            rx="135.383"
            ry="139.13"
            transform="matrix(0.999038 0.0438523 -0.0415179 0.999138 -211.856 473.819)"
            fill={fill2}
          />
          <ellipse cx="-19.0274" cy="456" rx="80.7566" ry="83" fill={fill2} />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_12_155786"
          x="-512"
          y="-89"
          width="923.984"
          height="1136"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_12_155786" />
        </filter>
      </defs>
    </svg>
  );
};

export default PinkColorImg;
