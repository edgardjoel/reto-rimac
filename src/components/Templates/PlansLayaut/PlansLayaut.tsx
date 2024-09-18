'use client';
import { Separator } from '@components/Atoms';
import { StepProgressMobile } from '@components/Molecules';
import { CircleWithLabel } from '@components/Molecules/CircleWithLabel';
import { CircleWithLabelContainer } from '@components/Organisms';
import { circleItems, GoBackIconLabel } from '@data/circleItems';
import { useAuth } from '@hooks/useAuth';
import { Container } from '../Container';
import styles from './PlansLayaut.module.scss';

export type PlansLayautProps = {
  children: React.ReactNode;
  onChange?: () => void;
};

const PlansLayaut: React.FC<PlansLayautProps> = ({ children, onChange }) => {
  const { userInfo } = useAuth();

  const name = userInfo?.name;
  const currentStep = userInfo?.progress?.currentStep || 0;
  const totalSteps = userInfo?.progress?.totalSteps || 0;
  return (
    <div className={styles['plans-layout']}>
      {/* barra de progreso  mobile y destock*/}
      <div className={styles['plans-layout__progress-bar-container']}>
        <CircleWithLabelContainer items={circleItems} currentStep={currentStep} />
        {/* boton de atras */}

        <div className={styles['plans-layout__go-back']}>
          <CircleWithLabel onChange={onChange} {...GoBackIconLabel} width="20px" />
        </div>
      </div>

      <Container className={styles['plans-layout__step-progress']}>
        <StepProgressMobile
          currentStep={currentStep + 1}
          totalSteps={totalSteps}
          onPrevStep={onChange}
        />
      </Container>
      <Separator
        color="#CCD1EE"
        width="100%"
        height="1px"
        margin="0px"
        className={styles['plans-layout__step-progress']}
      />
      <Container className="plans-layout__container">
        {/* titulo */}

        {currentStep == 0 ? (
          <>
            <section className={styles['plans-layout__title-container']}>
              {' '}
              <h1 className={styles['plans-layout__title']}>{name} ¿Para quién deseas cotizar?</h1>
              <p className={styles['plans-layout__subtitle']}>
                Selecciona la opción que se ajuste más a tus necesidades.
              </p>
            </section>
          </>
        ) : (
          <div className={styles['plans-layout__title-container--left']}>
            <h1 className={styles['plans-layout__title plans-layout__subtitle--resumen']}>
              Resumen del seguro
            </h1>
          </div>
        )}

        {children}
      </Container>
    </div>
  );
};

export default PlansLayaut;
