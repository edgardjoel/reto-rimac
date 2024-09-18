'use client';
import styles from './ProgressBar.module.scss';
import classNames from 'classnames';

export type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, className }) => {
  const percentage = (currentStep / totalSteps) * 100;
  return (
    <div className={classNames(className, styles['progress-bar'])}>
      <div className={styles['progress-bar__fill']} style={{ width: ` ${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
