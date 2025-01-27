import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary';
import HomePage from '../pages/home-page';
import NotFoundPage from '../pages/not-found-page';
import Layout from '../layout';
import CharacterListPage from '@react-monorepo/characters';

const defaultRoute = {
  index: true,
  Component: HomePage,
};

const notFoundRoute = {
  path: '*',
  element: <NotFoundPage />,
};

const charactersRoute = {
  path: '/characters',
  element: <CharacterListPage />,
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
