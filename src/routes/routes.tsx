import { lazy, type ReactElement } from 'react';
import React from 'react';

import { Paths } from '../constants/paths';
import CharacterPage from '../pages/characterPage';
import ErrorPage from '../pages/errorPage';

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
    path: `${Paths.character}/:id`,
    element: <CharacterPage />,
  },
  {
    path: Paths.notFound,
    element: <ErrorPage />,
  },
  {
    path: Paths.error,
    element: <ErrorPage />,
  },
];
