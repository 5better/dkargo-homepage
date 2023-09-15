import { i18n } from 'i18next';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../i18n/settings';
import { useTranslation } from '../../i18n';
import { PropsWithChildren } from 'react';

interface TransProps {
  lng: string;
  children: PropsWithChildren;
}

function TransComponent({ lng, children }: TransProps) {
  return <Trans>{children}</Trans>;
}

export default TransComponent;
