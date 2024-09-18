'use client';
import { Footer, Header } from '@components/Organisms';
import { Outlet } from 'react-router-dom';

import styles from './HomeLayout.module.scss';
import { Container } from '../Container';

export type HomeLayoutProps = {
  hideFooter?: boolean;
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ hideFooter = true }) => {
  return (
    <div className={styles['home-layout']}>
      <Container>
        <Header
          logoWidth="73.19px"
          logoHeight="36px"
          logoColor="#F7052D"
          phoneNumber="(01) 411 6001"
          contactMessage="¡Compra por este medio!"
        />
      </Container>
      <main className={styles['home-layout__main']}>{<Outlet />}</main>
      {hideFooter ? (
        <div className={styles['home-layout__content-footer']}>
          <Container>
            <Footer
              logoWidth="85.37px"
              logoHeight="42px"
              logoColor="#FFFF"
              mobileLogoWidth="138px"
              mobileLogoHeight="20px"
              mobileLogoColor="#FFFF"
            />
          </Container>
        </div>
      ) : (
        <div className={styles['home-layout__content-footer--marginTop']}></div>
      )}
    </div>
  );
};

export default HomeLayout;
