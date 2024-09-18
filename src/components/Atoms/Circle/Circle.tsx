// Circle.tsx
import React from 'react';
import styles from './Circle.module.scss';

type CircleProps = {
  size: string;
  border: string;
  background?: string;
  textColor?: string;
  number?: number;
  icon?: React.ReactNode;
  lineIcon?: React.ReactNode;
  fontWeight?: string;
};

const Circle: React.FC<CircleProps> = ({
  size = '24px',
  border = ' 1px solid #7981B2',
  background = 'transparent',
  textColor = '#7981B2',
  number,
  icon,
  fontWeight = 'normal',
}) => {
  const circleStyles = {
    border,
    backgroundColor: background,
    color: textColor,
    width: size,
    height: size,
    lineHeight: size,
    fontSize: `calc(${size} / 2)`,
    fontWeight,
  };

  return (
    <div className={styles.circle} style={circleStyles}>
      {icon && <div className={styles.circle__icon}>{icon}</div>}
      {number !== undefined && <span className={styles.circle__number}>{number}</span>}
    </div>
  );
};

export default Circle;
