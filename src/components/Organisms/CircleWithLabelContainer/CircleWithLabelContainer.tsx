'use client';
import { CircleWithLabel } from '@components/Molecules/CircleWithLabel';
import styles from './CircleWithLabelContainer.module.scss';
import { circleItems } from '@data/circleItems';

export type CircleWithLabelContainerProps = {
  items: {
    size: string;
    border: string;
    background?: string;
    textColor?: string;
    number?: number;
    icon?: React.ReactNode;
    label?: string;
    labelColor?: string;
    fontWeight?: string;
    lineIcon?: React.ReactNode;
  }[];
  background?: string;
  currentStep: number;
};

const CircleWithLabelContainer: React.FC<CircleWithLabelContainerProps> = ({
  items,
  background = '#EDEFFC',
  currentStep,
}) => {
  const { number: numberActive, lineIcon: line, ...colorActivo } = circleItems[0];
  const { number: numberInactive, lineIcon: line2, ...colorInactivo } = circleItems[1];

  return (
    <div className={styles['circle-with-label-container']} style={{ background }}>
      {items.map((item, index) => {
        const colors = index === currentStep ? colorActivo : colorInactivo;
        const combinedProps = { ...item, ...colors };
        return (
          <div key={index} className={styles['circle-with-label-container__item']}>
            <CircleWithLabel {...combinedProps} />
          </div>
        );
      })}
    </div>
  );
};

export default CircleWithLabelContainer;
