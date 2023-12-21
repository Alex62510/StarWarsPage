import React from 'react';

import { Button } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../constants/paths';
import { useStore } from '../../store/store';

import s from './characterPage.module.css';

const CharacterPage = (): React.JSX.Element => {
  const { characterInfo, getCharacterInfo } = useStore();
  const navigate = useNavigate();
  const handler = (): void => {
    navigate(Paths.main);
    getCharacterInfo(null);
  };
  const renderInfoKey = characterInfo && Object.keys(characterInfo);

  return (
    <div>
      <Button
        variant="contained"
        sx={{ color: 'black', backgroundColor: 'darkgrey' }}
        onClick={handler}
      >
        Back to main
      </Button>
      <div>
        {renderInfoKey &&
          renderInfoKey?.map(key => (
            <div key={key}>
              <Fade direction="up" duration={4000}>
                <div className={s.info}>{`${key}: ${characterInfo[key]}`}</div>
              </Fade>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CharacterPage;
