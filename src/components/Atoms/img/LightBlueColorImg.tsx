export type LightBlueColorImgProps = {
  width?: string;
  height?: string;
  fill?: string;
  fill2?: string;
  [key: string]: any; // Para permitir cualquier otra propiedad adicional
};

const LightBlueColorImg = ({
  width = '432px',
  height = '768px',
  fill = '#D9D9D9',
  fill2 = '#00F4E2',
  ...props
}: LightBlueColorImgProps) => {
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
        id="mask0_12_155785"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-92"
        width="432"
        height="1088"
      >
        <rect
          x="432"
          y="996"
          width="432"
          height="1088"
          transform="rotate(-180 432 996)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_12_155785)">
        <g filter="url(#filter0_f_12_155785)">
          <ellipse
            cx="92.1058"
            cy="94.6545"
            rx="92.1058"
            ry="94.6545"
            transform="matrix(-0.999038 -0.0438522 0.0415182 -0.999138 496.801 328.697)"
            fill="#00F4E2"
          />
          <ellipse
            cx="118.739"
            cy="122.024"
            rx="118.739"
            ry="122.024"
            transform="matrix(-0.999038 -0.0438522 0.0415182 -0.999138 667.756 571.352)"
            fill="#00F4E2"
          />
          <ellipse
            cx="135.384"
            cy="139.131"
            rx="135.384"
            ry="139.131"
            transform="matrix(-0.999038 -0.0438522 0.0415182 -0.999138 686.856 459.181)"
            fill="#00F4E2"
          />
          <ellipse
            cx="494.026"
            cy="476.999"
            rx="80.7572"
            ry="83.0002"
            transform="rotate(-180 494.026 476.999)"
            fill="#00F4E2"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_12_155785"
          x="63.0132"
          y="-114"
          width="923.987"
          height="1136"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="120" result="effect1_foregroundBlur_12_155785" />
        </filter>
      </defs>
    </svg>
  );
};

export default LightBlueColorImg;
