'use client';
import { PlansLayaut } from '@components/Templates';
import useInsuranceTypes from './Hooks/useInsuranceTypes ';
import styles from './Plans.module.scss';
import { StepOne } from './Steps/StepOne';
import useBack from './Hooks/useBack';
import { useAuth } from '@hooks/useAuth';
import { StepTwo } from './Steps/StepTwo';
import { useEffect } from 'react';
import { quoteOptionsData } from '@data/circleItems';

export type PlansProps = {
  // types...
};

const Plans: React.FC<PlansProps> = ({}) => {
  const { insuranceTypes, fetchInsuranceTypes, quoteOptionsCard } = useInsuranceTypes();

  const { Back } = useBack();
  const { userInfo } = useAuth();

  return (
    <div className={styles.plans}>
      <PlansLayaut onChange={Back}>
        {userInfo?.progress?.currentStep === 0 ? (
          <StepOne
            handleSelect={fetchInsuranceTypes}
            listPlans={insuranceTypes}
            listOptions={quoteOptionsCard}
          />
        ) : userInfo?.progress?.currentStep === 1 ? (
          <StepTwo />
        ) : (
          <></>
        )}
      </PlansLayaut>
    </div>
  );
};

export default Plans;
