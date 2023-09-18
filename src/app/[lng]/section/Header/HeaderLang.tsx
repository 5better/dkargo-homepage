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
  const handleLangChange = () => {
    console.log('ko, en');
  };

  return (
    <div>
      <GlobalImg onClick={handleLangChange()} />
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              <Link href={`/${l}${path}`}>{l}</Link>
            </span>
          );
        })}
    </div>
  );
}

export default HeaderLang;
