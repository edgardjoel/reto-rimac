'use client';
import { PhoneNumber } from '@components/Molecules/PhoneNumber';
import styles from './ContactSection.module.scss';
import classNames from 'classnames';

type ContactSectionProps = {
  number: string;
  message: string;
  className?: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ number, message, className }) => {
  return (
    <div className={classNames(`${styles['contact-section']} `, className)}>
      <p className={styles['contact-section__message']}>{message}</p>
      <PhoneNumber number={number} />
    </div>
  );
};

export default ContactSection;
