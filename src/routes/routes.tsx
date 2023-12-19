import { type ReactElement } from 'react';
import React from 'react';

import { Paths } from '../constants/paths';

interface RoutesType {
  path: string;
  element: ReactElement;
}

export const PagesRoutes: RoutesType[] = [
  {
    path: Paths.main,
    element: <div>Main</div>,
  },
  {
    path: Paths.character,
    element: <div>characterPage</div>,
  },
];
