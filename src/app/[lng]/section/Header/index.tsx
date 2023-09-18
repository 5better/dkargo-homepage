import HeaderLang from './HeaderLang';
import { useTranslation } from '@/app/i18n';
import { useRouter } from 'next/router';
import LogoImg from 'public/assets/images/logo_white.svg';
import { ReactNode } from 'react';

interface HeaderProps {
  lng: string;
  path?: string;
  children: ReactNode;
}

async function Header({ lng, path = '', children }: HeaderProps) {
  const { t, i18n } = await useTranslation(lng, 'header');

  return (
    <header>
      <div
        className={
          'flex flex-wrap items-center justify-between m-auto max-w-screen-xl'
        }
      >
        <LogoImg />
        <div className={'flex items-center gap-10'}>
          <div>{children}</div>
          <HeaderLang i18n={i18n} lng={lng} path={path} />
        </div>
      </div>
    </header>
  );
}

export default Header;
