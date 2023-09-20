import { languages } from '@/app/i18n/settings';
import { i18n } from 'i18next';
import Link from 'next/link';
import GlobalImg from 'public/assets/icons/global.svg';
import { Trans } from 'react-i18next/TransWithoutContext';

interface HeaderLangProps {
  i18n: i18n;
  lng: string;
  path?: string;
}

function HeaderLang({ i18n, lng, path = '' }: HeaderLangProps) {
  const t = i18n.getFixedT(lng, 'header');
  const languageChange = () => {
    console.log(lng);
  };

  return (
    <div>
      <GlobalImg onClick={languageChange()} />
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              <Link href={`/${l}${path}`} scroll={false}>
                {l}
              </Link>
            </span>
          );
        })}
    </div>
  );
}

export default HeaderLang;
