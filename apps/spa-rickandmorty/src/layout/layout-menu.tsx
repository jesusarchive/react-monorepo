import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu } from '@react-monorepo/ui';

export default function LayoutMenu() {
  const location = useLocation();
  const menuItems = React.useMemo(
    () => [
      {
        label: 'Home',
        to: '/',
      },
      {
        label: 'Characters',
        to: '/characters',
      },
    ],
    []
  );

  return (
    <Menu>
      {menuItems.map((item) => (
        <Link
          className="block"
          key={`menu-item-link-${item.label}`}
          to={item.to}
        >
          <Menu.Item active={location.pathname === item.to}>
            <span>{item.label}</span>
          </Menu.Item>
        </Link>
      ))}
    </Menu>
  );
}
