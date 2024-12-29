import {ReactElement, ReactNode} from 'react';

import {utilsHost} from '../';

type RxLinkProps = {
  children: ReactNode;
  href?: string;
};

export function UtLink({children, href}: RxLinkProps): ReactElement {
  return (
    <a
      className="bf-link"
      href={`${utilsHost}${href}`}
    >
      {children}
    </a>
  );
}
