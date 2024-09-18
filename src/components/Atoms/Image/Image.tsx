'use client';
import classNames from 'classnames';
import styles from './Image.module.scss';

export type ImageProps = {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  loading?: 'lazy' | 'eager';
  [key: string]: any;
};

const Image: React.FC<ImageProps> = ({
  src,
  srcSet,
  sizes,
  alt = 'Image',
  className = '',
  rounded = false,
  shadow = false,
  loading = 'lazy',
  ...props
}) => {
  const imageClassName = classNames(
    styles.image,
    {
      [styles['image--rounded']]: rounded,
      [styles['image--shadow']]: shadow,
    },
    className,
  );

  return (
    <img
      className={imageClassName}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      {...props}
    />
  );
};

export default Image;
