import { Trans } from 'react-i18next/TransWithoutContext';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import Header from './components/Header';
import { Footer } from './components/Footer';
import VerticalFeatures from './components/Feature/VerticalFeatures';

export default async function Home({
  //Landing page
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);
  //const data = await fetch('https://...', { cache: 'force-cache' }, { next: { revalidate: 3600 }) cache, revalidate option

  return (
    <>
      <Header>
        <h2>
          <Trans t={t} i18nKey="title">
            This is Next.js 13 Template.
          </Trans>
        </h2>
      </Header>
      <main>
        <VerticalFeatures />
      </main>
      <Footer lng={lng} />
    </>
  );
}
