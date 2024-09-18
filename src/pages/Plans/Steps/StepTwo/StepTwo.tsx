'use client';
import { Separator } from '@components/Atoms';
import FamlyIcon from '@components/Atoms/Icons/FamilyIcon';
import styles from './StepTwo.module.scss';
import { useAuth } from '@hooks/useAuth';

export type StepTwoProps = {
  // types...
};

const StepTwo: React.FC<StepTwoProps> = ({}) => {
  const { userInfo } = useAuth();
  return (
    <div className={styles['step-two']}>
      <header className={styles['step-two__header']}>
        <h3 className={styles['step-two__title']}>Precios calculados para:</h3>
        <section className={styles['step-two__section2']}>
          <FamlyIcon /> <p className={styles['step-two__text-name']}> {userInfo?.fullName}</p>
        </section>
      </header>
      <Separator color="#CCD1EE" width="100%" height="1px" margin="16px" />
      <main className={styles['step-two__main']}>
        <section className={styles['step-two__section']}>
          <h4 className={styles['step-two__subtitle']}>Responsable de pago</h4>
          <span className={styles['step-two__info']}>
            {userInfo?.typeDocument}:<p className={styles['step-two__text']}>{userInfo?.dni}</p>
          </span>
          <span className={styles['step-two__info']}>
            Celular:<p className={styles['step-two__text']}>{userInfo?.phoneNumber}</p>
          </span>
        </section>
        <section className={styles['step-two__section']}>
          <h4 className={styles['step-two__subtitle']}>Plan elegido</h4>
          <p className={styles['step-two__text']}>{userInfo?.namePlan}</p>
          <span className={styles['step-two__info']}>
            Costo del Plan: <p className={styles['step-two__text']}>${userInfo?.price} al mes</p>
          </span>
        </section>
      </main>
    </div>
  );
};

export default StepTwo;
