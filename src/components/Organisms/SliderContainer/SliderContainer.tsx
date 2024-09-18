'use client';
import React, { useState } from 'react';
import styles from './SliderContainer.module.scss';
// Asegúrate de importar el tipo correcto
import { PlanCard } from '@components/Molecules';
import { PlanCardProps } from '@components/Molecules/PlanCard/PlanCard';
import classNames from 'classnames';

export type SliderContainerProps = {
  currentPlans: PlanCardProps[];
  className?: string;
  onSelect: (e: any) => void;
};

const SliderContainer: React.FC<SliderContainerProps> = ({ currentPlans, className, onSelect }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = currentPlans.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className={classNames(styles.slider, className)}>
      <div className={styles['slider__wrapper']}>
        <div
          className={styles['slider__content']}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {currentPlans.map((plan, index) => (
            <div className={styles['slider__item']} key={index}>
              <PlanCard
                className={styles['plans__plans-container__plan-card']}
                key={index}
                title={plan.title}
                subtitle={plan.subtitle}
                cost={plan.cost}
                features={plan.features}
                label={plan.label}
                icon={plan.icon}
                iconPosition={plan.iconPosition}
                onSelect={() => onSelect(plan)}
                originalCostStr={plan.originalCostStr}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles['slider__controls']}>
        <button
          className={`${styles['slider__button']} ${styles['prev']} ${currentSlide === 0 ? styles['disabled'] : ''}`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ‹
        </button>
        <div className={styles['slider__pagination']}>
          <span className={styles['slider__pagination-info']}>
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
        <button
          className={`${styles['slider__button']} ${styles['next']} ${currentSlide === totalSlides - 1 ? styles['disabled'] : ''}`}
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SliderContainer;
