import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary';
import Layout from '../layout';
import NotFoundPage from '../pages/not-found-page';

const defaultRoute = {
  index: true,
  async lazy() {
    const { default: HomePage } = await import('../pages/home-page');
    return {
      Component: HomePage,
    };
  },
};

const notFoundRoute = {
  path: '*',
  element: <NotFoundPage />,
};

const charactersRoute = {
  path: '/characters',
  async lazy() {
    const { default: CharacterListPage } = await import(
      '@react-monorepo/characters'
    );
    return {
      Component: CharacterListPage,
    };
  },
};

export const routes = [
  {
    path: '/',
    element: <Layout />,
    ErrorBoundary: ErrorBoundary,
    children: [defaultRoute, charactersRoute, notFoundRoute],
  },
];

const router = createBrowserRouter(routes);

export default router;
