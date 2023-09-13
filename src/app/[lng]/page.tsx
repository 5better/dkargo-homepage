import { Trans } from 'react-i18next/TransWithoutContext';
import { languages, fallbackLng } from '../i18n/settings';
import { useTranslation } from '../i18n';
import { Footer } from './components/Footer';

export default async function Page({
  //index page
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
      <main>
        <div className={'flex flex-row text-5xl'}>
          <h2>
            <Trans t={t} i18nKey="title">
              This is Next.js 13 Template.
            </Trans>
          </h2>
        </div>
        <div className={'flex gap-1 justify-center'}>
          <div className={'w-3/6 h-20 bg-amber-500'}>Responsive</div>
          <div className={'w-20 h-20 bg-amber-500'}>Responsive</div>
          <div className={'w-20 h-20 bg-amber-500'}>Responsive</div>
        </div>
      </main>
      <Footer lng={lng} />
    </>
  );
}
