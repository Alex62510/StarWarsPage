import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PagesRoutes } from './routes/routes';

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {PagesRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
