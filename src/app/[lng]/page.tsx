import { useTranslation } from '../i18n';
import { languages, fallbackLng } from '../i18n/settings';
import VerticalFeatures from './section/Feature/VerticalFeatures';
import { Footer } from './section/Footer';
import Header from './section/Header';
import Hero from './section/Hero';
import { Trans } from 'react-i18next/TransWithoutContext';

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
      <Header lng={lng}>
        <Trans t={t} i18nKey="title">
          This is Next.js 13 Template.
        </Trans>
      </Header>
      <main>
        <Hero />
        <VerticalFeatures />
      </main>
      <Footer lng={lng} />
    </>
  );
}
