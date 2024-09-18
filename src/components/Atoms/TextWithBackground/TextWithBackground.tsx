'use client';
import styles from './TextWithBackground.module.scss';

export type TextWithBackgroundProps = {
  text: string;
  background?: string;
};

const TextWithBackground: React.FC<TextWithBackgroundProps> = ({ text, background }) => {
  return (
    <h2 className={styles['text-with-background']} style={{ background }}>
      {text}
    </h2>
  );
};

export default TextWithBackground;
