'use client';
import { PlanCard, QuoteOption } from '@components/Molecules';
import { PlanCardProps } from '@components/Molecules/PlanCard/PlanCard';
import { QuoteOptionProps } from '@components/Molecules/QuoteOption/QuoteOption';
import { SliderContainer } from '@components/Organisms/SliderContainer';
import useBack from '@pages/Plans/Hooks/useBack';
import styles from './StepOne.module.scss';

export type StepOneProps = {
  handleSelect: (title: QuoteOptionProps) => void;
  listPlans: PlanCardProps[];
  listOptions: QuoteOptionProps[];
};

const StepOne: React.FC<StepOneProps> = ({ handleSelect, listPlans, listOptions }) => {
  const { Next } = useBack();
  return (
    <div className={styles.stepone}>
      {listOptions.length && (
        <div className={styles['plans__quote-options-container']}>
          {listOptions.map((option, index) => (
            <QuoteOption
              className={styles['plans__quote-options-container__quote-option']}
              key={index}
              active={option.active}
              unselectedIcon={option.unselectedIcon}
              selectableIcon={option.selectableIcon}
              sideIcon={option.sideIcon}
              selectableIconPosition={option.selectableIconPosition}
              iconPosition={option.iconPosition}
              title={option.title}
              description={option.description}
              onSelect={() => handleSelect(option)}
            />
          ))}
        </div>
      )}

      {listPlans.length ? (
        <div className={styles['plans__plans-container']}>
          {listPlans.map((plan, index) => (
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
              onSelect={() => Next(plan)}
              originalCostStr={plan.originalCostStr}
            />
          ))}

          {/* Slider */}

          <SliderContainer
            currentPlans={listPlans}
            className={styles['plans__plans-container__slider']}
            onSelect={Next}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default StepOne;
