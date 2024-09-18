'use client';
import { ProgressBar } from '@components/Atoms';
import styles from './StepProgressMobile.module.scss';
import { CircleWithLabel } from '../CircleWithLabel';
import { GoBackIconLabelMobile } from '@data/circleItems';

export type StepProgressMobileProps = {
  currentStep: number;
  totalSteps: number;
  onPrevStep?: () => void;
};

const StepProgressMobile: React.FC<StepProgressMobileProps> = ({
  currentStep,
  totalSteps,
  onPrevStep,
}) => {
  return (
    <div className={styles['step-progress-mobile']}>
      <CircleWithLabel
        onChange={onPrevStep}
        {...GoBackIconLabelMobile}
        width="20px"
        className={styles['step-progress-mobile__button']}
      />

      <div className={styles['step-progress-mobile__container']}>
        {/* Texto para mostrar el paso actual */}
        <div className={styles['step-progress-mobile__label']}>
          Paso {currentStep} de {totalSteps}
        </div>

        {/* Barra de progreso */}
        <div className={styles['step-progress-mobile__bar']}>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
      </div>
    </div>
  );
};

export default StepProgressMobile;
