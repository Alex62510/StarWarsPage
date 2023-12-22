import React, { useEffect } from 'react';

import { Button } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { useNavigate, useParams } from 'react-router-dom';

import { useStore } from '../../store/store';

import s from './characterPage.module.css';

const CharacterPage = (): React.JSX.Element => {
  const { characterInfo, getCharacterInfo } = useStore();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCharacterInfo(+id);
    }
  }, [id]);

  const handler = (): void => {
    navigate(-1);
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
              <Fade direction="up" duration={3000}>
                <div className={s.info}>{`${key}: ${characterInfo[key]}`}</div>
              </Fade>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CharacterPage;
