'use client';
import { Image, TextWithBackground } from '@components/Atoms';
import styles from './FlexibleHealthInsurance.module.scss';

export type FlexibleHealthInsuranceProps = {
  title: string;

  backgroundText: string;
  imageSrc?: string; // Prop opcional para la imagen
};

// Componente FlexibleHealthInsurance
const FlexibleHealthInsurance: React.FC<FlexibleHealthInsuranceProps> = ({
  title,

  backgroundText,
  imageSrc, // Añadido aquí
}) => {
  return (
    <div className={styles['flexible-insurance__content']}>
      <div className={styles['flexible-insurance__text-container']}>
        <TextWithBackground text={backgroundText} />
        <article className={styles['flexible-insurance__article']}>
          <h1 className={styles['flexible-insurance__title']}>{title}</h1>
        </article>
      </div>
      {imageSrc && (
        <div className={styles['flexible-insurance__image-container']}>
          <Image
            src={imageSrc}
            alt="HappyFamily"
            width="136px"
            height="160px"
            className={styles['flexible-insurance__image']}
          />
        </div>
      )}
    </div>
  );
};

export default FlexibleHealthInsurance;
