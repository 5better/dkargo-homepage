import { useTranslation } from '../../i18n';
import { languages, fallbackLng } from '../../i18n/settings';
import { Trans } from 'react-i18next/TransWithoutContext';

// export function generateStaticParams() {
//   return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }];
// }

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/a/1
// - /product/b/2
// - /product/c/3

export default async function Page({
  //Service page
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
          <Trans t={t} i18nKey="title" />
        </div>
        <div className={'flex gap-1 justify-center'}>
          <div className={'w-3/6 h-20 bg-amber-500'}>Responsive</div>
          <div className={'w-20 h-20 bg-amber-500'}>Responsive</div>
          <div className={'w-20 h-20 bg-amber-500'}>Responsive</div>
        </div>
      </main>
    </>
  );
}
