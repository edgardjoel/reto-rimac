'use client';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = {
  label: string; // Texto que se mostrará en el botón
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Función para manejar el evento de clic
  type?: 'button' | 'submit' | 'reset'; // Tipo de botón
  disabled?: boolean; // Deshabilitar el botón
  variant?: 'primary' | 'secondary' | 'danger'; // Variantes de estilo del botón
  size?: 'small' | 'medium' | 'large' | 'full-width'; // Tamaños del botón
  className?: string;
  [key: string]: any; // Aceptar cualquier otra propiedad adicional
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium', // Tamaño por defecto
  className,
  ...props
}) => {
  const combinedClassName = classNames(
    `${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]}`,
    className,
  );
  return (
    <button
      {...props}
      className={combinedClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
