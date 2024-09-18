'use client';
import { Button, Separator } from '@components/Atoms';
import { highlightKeywords } from '@data/circleItems';
import { highlightKeywordsSearch } from '@utilities/utils';
import classNames from 'classnames';
import styles from './PlanCard.module.scss';

export type PlanCardProps = {
  label?: React.ReactNode; // Componente de etiqueta opcional
  labelPosition?: 'left' | 'right';
  title: string;
  subtitle: string;
  cost: string;
  icon?: React.ReactNode; // ícono que puede ser pasado como un componente
  iconPosition?: 'left' | 'right'; // Posición del ícono
  features: { description: string; iconBineta?: React.ReactNode }[]; // Lista de características del plan
  onSelect?: () => void; // Acción al seleccionar el plan
  selectButtonLabel?: string; // Texto del botón
  className?: string;
  originalCostStr?: string;
};

const PlanCard: React.FC<PlanCardProps> = ({
  label,
  labelPosition = 'left',
  title,
  subtitle,
  cost,
  icon,
  iconPosition = 'right',
  features,
  onSelect,
  selectButtonLabel = 'Seleccionar plan',
  className,
  originalCostStr,
}) => {
  return (
    <div className={classNames(styles['plan-card'], className)}>
      {label && (
        <div
          className={`${styles['plan-card__label']} ${styles[`plan-card__label--${labelPosition}`]}`}
        >
          {label}
        </div>
      )}

      <div className={styles['plan-card__header']}>
        <div className={styles['plan-card__header-content']}>
          {/* Contenido de la izquierda (o derecha según la posición del icono) */}
          <div className={styles['plan-card__info']}>
            <h2 className={styles['plan-card__title']}>{title}</h2>
            <h4 className={styles['plan-card__subtitle']}>{subtitle}</h4>
            <p className={styles['plan-card__cost-target']}>{originalCostStr}</p>
            <p className={styles['plan-card__cost']}>{cost}</p>
          </div>

          {icon && (
            <div
              className={
                iconPosition === 'left'
                  ? styles['plan-card__icon--left']
                  : styles['plan-card__icon--right']
              }
            >
              {icon}
            </div>
          )}
        </div>
      </div>

      <Separator color="#CCD1EE" width="100%" height="1px" />
      <div className={styles['plan-card__main']}>
        <ul className={styles['plan-card__features']}>
          {features.map((feature, index) => (
            <li key={index} className={styles['plan-card__feature-item']}>
              <span className={styles['plan-card__feature-icon--bineta']}>
                {feature.iconBineta}
              </span>
              <span className={styles['plan-card__feature-icon']}>●</span>
              <p className={styles['plan-card__feature-description']}>
                {highlightKeywordsSearch(feature.description, highlightKeywords)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles['plan-card__footer']}>
        <Button
          size="full-width"
          label={selectButtonLabel}
          className={styles['plan-card__select-button']}
          onClick={onSelect}
        />
      </div>
    </div>
  );
};

export default PlanCard;
