import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu } from '@react-monorepo/ui';
import { Home, Users } from 'lucide-react';

export default function LayoutMenu() {
  const location = useLocation();
  const menuItems = React.useMemo(
    () => [
      {
        icon: <Home />,
        label: 'Home',
        to: '/',
      },
      {
        icon: <Users />,
        label: 'Characters',
        to: '/characters',
      },
    ],
    []
  );

  return (
    <Menu className="bg-white text-black p-4">
      {menuItems.map((item) => (
        <Link
          className={`block p-2 rounded-md ${
            location.pathname === item.to ? 'bg-gray-200' : 'hover:bg-gray-300'
          }`}
          key={`menu-item-link-${item.label}`}
          to={item.to}
        >
          <Menu.Item className="flex items-center space-x-2">
            <div className="menu-item-content flex items-center space-x-2">
              <span className="menu-item-icon">{item.icon}</span>
              <span className="menu-item-label">{item.label}</span>
            </div>
          </Menu.Item>
        </Link>
      ))}
    </Menu>
  );
}
