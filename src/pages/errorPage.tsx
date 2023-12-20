import React from 'react';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../constants/paths';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(Paths.main);
  };

  return (
    <div>
      <div> Error</div>
      <Button onClick={handler}>Back to main</Button>
    </div>
  );
};

export default ErrorPage;
