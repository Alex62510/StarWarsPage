import React from 'react';

import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../constants/paths';
import Preloader from '../../helpers/Preloader';
import { useStore } from '../../store/store';

const ErrorPage = (): React.JSX.Element => {
  const navigate = useNavigate();
  const { isLoading } = useStore();
  const handler = (): void => {
    navigate(Paths.main);
  };

  return (
    <Box>
      <Box> Error</Box>
      {isLoading ? (
        <Preloader />
      ) : (
        <Button
          variant="contained"
          sx={{ color: 'black', backgroundColor: 'darkgrey' }}
          onClick={handler}
        >
          Back to main
        </Button>
      )}
    </Box>
  );
};

export default ErrorPage;
