import React from 'react';

import { Box, LinearProgress } from '@mui/material';

const Preloader = (): React.JSX.Element => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
};

export default Preloader;
