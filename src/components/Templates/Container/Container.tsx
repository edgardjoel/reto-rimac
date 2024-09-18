import classNames from 'classnames';
import styles from './Container.module.scss';

type ContainerProps = {
  children: React.ReactNode;

  className?: string;
  [key: string]: any;
};

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={classNames(`${styles.container} `, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
