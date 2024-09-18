'use client';
import styles from './Checkbox.module.scss';

export type CheckboxProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxId?: string;
};

const Checkbox = ({ checked, onChange, checkboxId }: CheckboxProps) => {
  return (
    <label className={styles['custom-checkbox']}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles['custom-checkbox__input']}
        id={checkboxId}
      />
      <span className={styles['custom-checkbox__box']}></span>
    </label>
  );
};

export default Checkbox;
