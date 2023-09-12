import { Trans } from 'react-i18next/TransWithoutContext';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import { Footer } from './components/Footer';

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <main>
        <div>
          <h2>
            <Trans t={t} i18nKey="title">
              This is Next.js 13 Template.
            </Trans>
          </h2>
        </div>
        <div>Responsive Web</div>
      </main>
      <Footer lng={lng} />
    </>
  );
}
