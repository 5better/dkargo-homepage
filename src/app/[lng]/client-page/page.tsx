'use client';

import { useTranslation } from '../../i18n/client';

export default function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = useTranslation(lng, 'client-page');
  return (
    <>
      <main>
        <p>{t('title')}</p>
      </main>
    </>
  );
}
