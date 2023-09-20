import { useTranslation } from '@/app/i18n';
import { languages, fallbackLng } from '@/app/i18n/settings';
import { Trans, TransProps } from 'react-i18next/TransWithoutContext';

interface TrProps {
  lng: string;
  key: any;
}

async function Tr({ lng, key }: TrProps) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <div>
      <Trans t={t} i18nKey={key}>
        {/* TODO: 텍스트 송출 안되는 이유? {lng} */}
      </Trans>
    </div>
  );
}

export default Tr;
