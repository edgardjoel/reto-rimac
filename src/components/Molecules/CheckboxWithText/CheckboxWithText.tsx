'use client';
import { Checkbox } from '@components/Atoms';
import styles from './CheckboxWithText.module.scss';
import { CheckboxProps } from '@components/Atoms/Checkbox/Checkbox';
import classNames from 'classnames';

export type CheckboxWithTextProps = CheckboxProps & {
  label: string;
  checkboxId: string;
  classFontSizeSpan?: string;
  [key: string]: any;
};

const CheckboxWithText = ({
  label,
  checkboxId,
  checked,
  onChange,
  classFontSizeSpan,
  ...props
}: CheckboxWithTextProps) => {
  const { className, ...restProps } = props;

  const combinedClassName = classNames(styles['custom-checkbox-text'], className);
  return (
    <div {...restProps} className={combinedClassName}>
      <Checkbox checked={checked} checkboxId={checkboxId} onChange={onChange}></Checkbox>
      <label htmlFor={checkboxId} className={styles['custom-checkbox-text__label']}>
        <span className={classNames(styles['custom-checkbox-text__span'], classFontSizeSpan)}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default CheckboxWithText;
