import { lazy, type ReactElement } from 'react';
import React from 'react';

import { Paths } from '../constants/paths';

interface RoutesType {
  path: string;
  element: ReactElement;
}

const MainPage = lazy(() => import('../pages/mainPage'));

export const PagesRoutes: RoutesType[] = [
  {
    path: Paths.main,
    element: <MainPage />,
  },
  {
    path: Paths.character,
    element: <div>characterPage</div>,
  },
  {
    path: Paths.notFound,
    element: <div>page 404</div>,
  },
  {
    path: Paths.error,
    element: <div>server error</div>,
  },
];
