import { useTranslation } from '../../i18n';
import { languages } from '../../i18n/settings';
import { i18n } from 'i18next';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';

interface TransProps {
  lng: string;
  children: PropsWithChildren;
}

function TransComponent({ lng, children }: TransProps) {
  return <Trans>{children}</Trans>;
}

export default TransComponent;
