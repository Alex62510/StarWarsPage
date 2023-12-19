import { type ReactElement } from 'react';
import React from 'react';

import { Paths } from '../constants/paths';
import MainPage from '../pages/mainPage';

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
    path: Paths.character,
    element: <div>characterPage</div>,
  },
];
