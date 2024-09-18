'use client';

import classNames from 'classnames';
import styles from './QuoteOption.module.scss';

export type QuoteOptionProps = {
  unselectedIcon?: React.ReactNode;
  selectableIcon?: React.ReactNode; // Ícono seleccionable (ej. círculo)
  sideIcon?: React.ReactNode; // Ícono alado (puede ir a la izquierda o derecha)
  selectableIconPosition?: 'left' | 'right'; // Posición del icono de selección
  iconPosition?: 'left' | 'right'; // Posición del ícono (izquierda o derecha)
  title: string; // Título de la opción
  description: string; // Descripción de la opción
  onSelect?: () => void;
  active?: boolean;
  className?: string;
  id?: number;
};

const QuoteOption: React.FC<QuoteOptionProps> = ({
  unselectedIcon,
  selectableIcon,
  sideIcon,
  selectableIconPosition = 'right',
  iconPosition = 'left',
  title,
  description,
  onSelect,
  active = false,
  className,
}) => {
  return (
    <div
      className={classNames(styles['quote-option'], className)}
      style={{
        border: active ? '3px solid #03050F' : '',
        background: '#fff',
      }}
      onClick={onSelect}
    >
      {selectableIcon && (
        <div
          className={`${styles['quote-option__selectable-icon']} ${
            selectableIconPosition === 'left' ? styles['quote-option__selectable-icon--left'] : ''
          } ${
            selectableIconPosition === 'right' ? styles['quote-option__selectable-icon--right'] : ''
          }`}
        >
          {active ? selectableIcon : unselectedIcon}
        </div>
      )}

      <div className={styles['quote-option__content']}>
        {iconPosition === 'left' && sideIcon && (
          <div className={styles['quote-option__icon--left']}>{sideIcon}</div>
        )}

        <div className={styles['quote-option__text']}>
          <h3 className={styles['quote-option__title']}>{title}</h3>
          <p className={styles['quote-option__description']}>{description}</p>
        </div>

        {iconPosition === 'right' && sideIcon && (
          <div className={styles['quote-option__icon--right']}>{sideIcon}</div>
        )}
      </div>
    </div>
  );
};

export default QuoteOption;
