import React, { type ReactElement } from 'react';

import { Paths } from '../constants/paths';
import CharacterPage from '../pages/characterPage/characterPage';
import ErrorPage from '../pages/errorPage/errorPage';
import MainPage from '../pages/mainPage/mainPage';

interface RoutesType {
  path: string;
  element: ReactElement;
}

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
