import React, { ReactNode } from 'react';
import Link from 'next/link';

const Index = ({
  children,
  href,
  className,
  prefetch = false,
  passHref = false,
  target = '_self',
  download=false,
}: {
  children: ReactNode;
  href: string | undefined;
  className?: string;
  prefetch?: boolean;
  passHref?: boolean;
  target?: '_blank' | '_parent' | '_self' | '_top';
  download?:boolean;
}) => {
  return (
    <>
      {href && (
        <Link
          href={href}
          prefetch={prefetch}
          passHref={passHref}
          className={className}
          target={target}
          download={download}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default Index;
