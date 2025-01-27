import React from 'react';
import { Link } from 'react-router-dom';

import { cn } from '../../utils/cn';

export type MenuItemProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
};

function MenuItem({
  className,
  active,
  children,
  ...props
}: Readonly<MenuItemProps>) {
  return (
    <div
      className={cn(
        'block py-2 px-3 text-blue-700',
        active && 'font-bold',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type MenuProps = React.HTMLAttributes<HTMLDivElement> & {
  logo?: {
    src: string;
    alt: string;
  };
};

function Menu({ logo, className, children, ...props }: Readonly<MenuProps>) {
  return (
    <div className={cn('divide-y w-56', className)} {...props}>
      {logo && (
        <Link
          to="/"
          className={`h-14 w-56 cursor-pointer flex justify-end items-center p-4`}
        >
          <img src={logo.src} alt={logo.alt} />
        </Link>
      )}
      {children}
    </div>
  );
}

export default Object.assign(Menu, {
  Item: MenuItem,
});
