import React, { ReactNode } from 'react';
import style from './style.module.css';
import { clsx } from 'clsx';

// Defining the HTML tag that the component will support
const variantsMapping: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component
const Typography = ({
  variant,
  color,
  tag,
  className,
  id,
  children,
  onClick,
}: {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  variant?: string;
  color?: string;
  id?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.
  const Component = tag ?? 'p';
  return (
    <Component
      id={id}
      className={clsx(
        style[`variant-${variant ?? tag}`],
        color && style[`color-${color}`],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Typography;
