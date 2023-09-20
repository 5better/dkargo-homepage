import { useTranslation } from '../app/i18n';
import { languages, fallbackLng } from '../app/i18n/settings';
import { PropsWithChildren } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';

interface TransProps {
  lng: string;
  key: string;
  children: PropsWithChildren;
}

async function Translation({ lng, key, children }: TransProps) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <Trans t={t} i18nKey={key}>
      {children}
    </Trans>
  );
}

export default Translation;
