'use client';

export type LogoMobileProps = {
  width?: string;
  height?: string;
  fill?: string;
  color?: string;

  viewBox?: string;
  [key: string]: any;
};

const LogoMobile: React.FC<LogoMobileProps> = ({
  width = '74px',
  height = '36px',
  fill = 'none',
  color = 'white',
  viewBox = '0 0 138 20',
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
          d="M115.436 4.79274C114.87 4.83792 114.284 5.07287 113.676 5.859L104.927 17.6751H108.522L110.306 15.0306H116.837L117.514 17.6811H121.024L117.645 6.44934C117.189 5.07286 116.323 4.71443 115.436 4.79274ZM111.816 12.8528L115.211 8.39509L116.274 12.8528H111.816Z"
          fill={color}
        />
        <path
          d="M133.561 6.97239C134.834 6.96217 136.104 7.09652 137.345 7.37273L138 4.77522C136.683 4.50741 135.343 4.36431 133.999 4.34784C127.646 4.34784 123.615 7.18307 123.119 11.3999C122.681 15.1352 125.415 17.8261 131.302 17.8261C132.533 17.8198 133.762 17.7122 134.975 17.5041L135.686 14.6686C134.274 15.0646 132.809 15.2454 131.342 15.2045C128.348 15.1624 126.639 13.5279 126.887 11.4571C127.212 8.64586 129.857 6.9453 133.561 6.97239Z"
          fill={color}
        />
        <path
          d="M100.523 2.18604C99.7077 2.16492 99.1121 2.44548 98.4124 3.36866L90.1625 14.2448L86.9877 3.60406C86.6577 2.52702 85.9335 2.16793 85.2705 2.17396C84.2652 2.17396 83.7581 2.5874 83.2265 3.50153L75.9512 17.6811H80.0212L84.9437 7.9001L88.0204 17.6811H91.4029L98.837 7.95756L98.8003 17.6811H102.293L102.265 4.05056C102.274 2.7382 101.397 2.20716 100.523 2.18604Z"
          fill={color}
        />
        <path
          d="M68.0488 17.6812H71.7363L74.0785 8.10418L74.9269 4.6377H71.2848L68.0488 17.6812Z"
          fill={color}
        />
        <path
          d="M61.049 4.6377H53.9717L50.7805 17.6812H54.41L55.6199 12.7834H57.483L60.7014 17.6812H64.6543L61.049 12.4882C64.249 11.7029 65.3378 10.0865 65.5375 8.35442C65.7371 6.62238 64.7027 4.6377 61.049 4.6377ZM61.9112 8.54007C61.763 9.81551 60.4955 10.5674 58.7322 10.5674H56.1462L57.1112 6.63459H59.8333C61.3002 6.63459 62.0534 7.3042 61.9112 8.54007Z"
          fill={color}
        />
        <path
          d="M45.7834 3.93904C45.5468 3.49666 45.225 3.10492 44.8362 2.78619C44.4473 2.46747 43.9991 2.22798 43.5172 2.08144C43.0352 1.9349 42.529 1.88412 42.0273 1.93208C41.5257 1.98003 41.0383 2.12576 40.5933 2.36091L21.7349 12.3756L25.612 1.95741L25.652 1.84806C25.7466 1.59164 25.762 1.31301 25.6967 1.04773C25.6313 0.782451 25.488 0.542645 25.2849 0.358685C25.0819 0.174725 24.8284 0.0550084 24.5566 0.0149041C24.2848 -0.0252002 24.0071 0.0160647 23.759 0.133449L0.482765 11.177C0.281005 11.2772 0.126051 11.4512 0.0504536 11.6624C-0.0251439 11.8737 -0.0154564 12.1057 0.0772867 12.3101C0.17003 12.5145 0.338719 12.6753 0.548059 12.7588C0.757399 12.8423 0.990964 12.842 1.2001 12.7581L21.35 4.18488L14.9968 16.5423C14.8411 16.848 14.7528 17.1832 14.738 17.5255C14.7233 17.8678 14.7824 18.2093 14.9112 18.5271C15.0298 18.8153 15.2044 19.0775 15.425 19.2986C15.6455 19.5198 15.9079 19.6954 16.1969 19.8158C16.4858 19.9361 16.7956 19.9987 17.1089 20C17.4221 20.0012 17.7325 19.941 18.0224 19.8229L18.2696 19.7229L43.8693 9.28928C43.9897 9.24211 44.1068 9.18736 44.2202 9.12539C45.1191 8.64339 45.7887 7.82644 46.0818 6.85392C46.3749 5.8814 46.2676 4.83293 45.7834 3.93904Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default LogoMobile;
