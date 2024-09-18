import { LogoIcon } from '@components/Atoms';
import styles from './Header.module.scss';
import { ContactSection } from '../ContactSection';

type HeaderProps = {
  logoWidth?: string;
  logoHeight?: string;
  logoColor?: string;
  phoneNumber: string;
  contactMessage: string;
};

const Header: React.FC<HeaderProps> = ({
  logoWidth,
  logoHeight,
  logoColor,
  phoneNumber,
  contactMessage,
}) => {
  return (
    <header className={styles['header']}>
      <LogoIcon
        width={logoWidth}
        height={logoHeight}
        color={logoColor}
        className={styles['header__logo']}
      />
      <ContactSection
        number={phoneNumber}
        message={contactMessage}
        className={styles['header__contact']}
      />
    </header>
  );
};
export default Header;
