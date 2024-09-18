'use client';
import { Image, LightBlueColorImg, PinkColorImg, Separator } from '@components/Atoms';
import { Container } from '@components/Templates';
import styles from './Home.module.scss';

import { FlexibleHealthInsurance } from '@components/Molecules';
import { InsuranceQuoteForm } from '@components/Organisms';
import useUsers from './hooks/useUsers';

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = ({}) => {
  const { onSubmit } = useUsers();

  return (
    <div className={styles.home}>
      <div className={styles['home__images']}>
        <PinkColorImg className={styles['home__image--pink']} />
        <LightBlueColorImg className={styles['home__image--lightblue']} />
      </div>
      <Container>
        <div className={styles['home__content']}>
          <section className={styles['home__section--image']}>
            <Image
              src="./img/HappyFamily.png"
              alt="HappyFamily"
              width="480px"
              height="560px"
              className={styles['home__image']}
            />
          </section>
          <section className={styles['home__section--form']}>
            <div className={styles['home__form-content']}>
              <FlexibleHealthInsurance
                title="Creado para ti y tu familia"
                backgroundText="Seguro Salud Flexible"
                imageSrc="./img/HappyFamilyMiniature.png"
              />
              <Separator
                className={styles['home__form-separator']}
                color="#CCD1EE"
                width="100%"
                height="1px"
              />

              <p className={styles['home__form-description']}>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100%
                online.
              </p>
            </div>
            <InsuranceQuoteForm onSubmit={onSubmit} />
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Home;
