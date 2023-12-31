'use client';

import { FooterBase } from './FooterBase';
import { useTranslation } from '@/app/i18n/client';

function Footer({ lng, path }: { lng: string; path: string }) {
  const { i18n } = useTranslation(lng, 'footer');
  return <FooterBase i18n={i18n} lng={lng} path={path} />;
}

export default Footer;
