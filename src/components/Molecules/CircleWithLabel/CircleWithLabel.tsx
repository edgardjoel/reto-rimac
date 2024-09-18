'use client';
import { Circle } from '@components/Atoms';
import styles from './CircleWithLabel.module.scss';
import classNames from 'classnames';

type CircleWithLabelProps = {
  size: string;
  border: string;
  background?: string;
  textColor?: string;
  number?: number;
  icon?: React.ReactNode;
  fontWeight?: string;
  label?: string;
  labelColor?: string;
  lineIcon?: React.ReactNode;
  fontSize?: string;
  onChange?: () => void;
  width?: string;
  className?: string;
};

const CircleWithLabel: React.FC<CircleWithLabelProps> = ({
  size,
  border,
  background,
  textColor,
  number,
  icon,
  fontWeight,
  label,
  labelColor,
  lineIcon,
  fontSize = '16px',
  onChange,
  width,
  className,
}) => {
  return (
    <div
      className={classNames(styles['circle-with-label'], className)}
      style={{ width }}
      onClick={onChange}
    >
      <Circle
        size={size}
        border={border}
        background={background}
        textColor={textColor}
        number={number}
        icon={icon}
        fontWeight={fontWeight}
      />
      <div className={styles['circle-with-label__content']}>
        {label && (
          <span
            className={styles['circle-with-label__label']}
            style={{ color: labelColor, fontSize: fontSize }}
          >
            {label}
          </span>
        )}
        {lineIcon && <div className={styles['circle-with-label__line-icon']}>{lineIcon}</div>}
      </div>
    </div>
  );
};

export default CircleWithLabel;
