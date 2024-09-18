'use client';
import classNames from 'classnames';
import styles from './Separator.module.scss';

export type SeparatorProps = {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  margin?: string;
  [key: string]: any;
};

const Separator: React.FC<SeparatorProps> = ({
  width = '100%',
  height = '2px',
  color = '#2B304E',
  className,
  margin,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(styles.separator, className)}
      style={{ width: width, height: height, backgroundColor: color, margin: margin }}
    />
  );
};

export default Separator;
