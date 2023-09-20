import { useTranslation } from '../i18n';
import { languages, fallbackLng } from '../i18n/settings';
import VerticalFeatures from './section/Feature/VerticalFeatures';
import { Footer } from './section/Footer';
import Header from './section/Header';
import Hero from './section/Hero';
import Tr from '@/components/Translation';
import { Trans } from 'react-i18next/TransWithoutContext';

export default async function Home({
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
      <Header lng={lng}>
        <Tr lng={lng} key="title" />
        <Trans t={t} i18nKey="title" />
      </Header>
      <main>
        <Hero />
        <VerticalFeatures />
      </main>
      <Footer lng={lng} />
    </>
  );
}
