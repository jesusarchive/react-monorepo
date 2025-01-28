import React from 'react';

import { cn } from '@react-monorepo/utils';

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

export type MenuProps = React.HTMLAttributes<HTMLDivElement>;

function Menu({ className, children, ...props }: Readonly<MenuProps>) {
  return (
    <div className={cn('divide-y w-56', className)} {...props}>
      {children}
    </div>
  );
}

export default Object.assign(Menu, {
  Item: MenuItem,
});
