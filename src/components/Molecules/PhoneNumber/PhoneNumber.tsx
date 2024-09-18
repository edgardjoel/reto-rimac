'use client';
import { PhoneIcon } from '@components/Atoms';
import styles from './PhoneNumber.module.scss';

type PhoneNumberProps = {
  number: string;
  className?: string;
};

const PhoneNumber: React.FC<PhoneNumberProps> = ({ number, className }) => {
  return (
    <div className={`${styles['phone-number']} ${className}`}>
      <PhoneIcon className={styles['phone-number__icon']} />
      <p className={styles['phone-number__text']}>{number}</p>
    </div>
  );
};

export default PhoneNumber;
