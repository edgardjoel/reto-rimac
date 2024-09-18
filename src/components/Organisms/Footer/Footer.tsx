'use client';
import { LogoIcon, LogoMobile, Separator } from '@components/Atoms';
import styles from './Footer.module.scss';
import { currentYear } from '@utilities/utils';

export type FooterProps = {
  logoWidth?: string;
  logoHeight?: string;
  logoColor?: string;
  viewBox?: string;
  mobileLogoWidth?: string;
  mobileLogoHeight?: string;
  mobileLogoColor?: string;
  mobileLogoViewBox?: string;
};

const Footer: React.FC<FooterProps> = ({
  logoWidth,
  logoHeight,
  logoColor,
  viewBox,
  mobileLogoWidth,
  mobileLogoHeight,
  mobileLogoColor,
  mobileLogoViewBox,
}) => {
  return (
    <div className={styles.footer}>
      <LogoIcon
        width={logoWidth}
        height={logoHeight}
        color={logoColor}
        viewBox={viewBox}
        className={styles['footer__logo']}
      />
      <LogoMobile
        width={mobileLogoWidth}
        height={mobileLogoHeight}
        color={mobileLogoColor}
        viewBox={mobileLogoViewBox}
        className={styles['footer__logo--mobile']}
      />
      <Separator className={styles['footer__separator']} width="100%" height="1px" />
      <p className={styles['footer__text']}>© {currentYear()} RIMAC Seguros y Reaseguros.</p>
    </div>
  );
};

export default Footer;
