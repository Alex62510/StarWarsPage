import React from 'react';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../constants/paths';
import { useStore } from '../store/store';

const CharacterPage = (): React.JSX.Element => {
  const { characterInfo, getCharacterInfo } = useStore();
  const navigate = useNavigate();
  const handler = (): void => {
    navigate(Paths.main);
    getCharacterInfo(null);
  };

  return (
    <div>
      {characterInfo?.gender}
      <Button onClick={handler}>Back to main</Button>
    </div>
  );
};

export default CharacterPage;
