import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface HeaderProps {
  logo?: ReactNode;
  children: ReactNode;
}

function Header({ logo, children }: HeaderProps) {
  // const router = useRouter();

  return (
    <ul className={'flex flex-wrap items-center justify-between'}>
      {logo && <li>{logo}</li>}
      <li>{children}</li>
    </ul>
  );
}

export default Header;
