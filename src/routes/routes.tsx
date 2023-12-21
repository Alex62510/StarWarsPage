import { lazy, type ReactElement } from 'react';
import React from 'react';

import { Paths } from '../constants/paths';

interface RoutesType {
  path: string;
  element: ReactElement;
}

const MainPage = lazy(() => import('../pages/mainPage'));
const CharacterPage = lazy(() => import('../pages/characterPage/characterPage'));
const ErrorPage = lazy(() => import('../pages/errorPage'));

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
