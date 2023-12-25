import React, { useEffect } from 'react';

import { Box, Button } from '@mui/material';
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
    <Box>
      <Box className={s.button}>
        <Button
          variant="contained"
          sx={{ color: 'black', backgroundColor: 'darkgrey' }}
          onClick={handler}
        >
          Back to main
        </Button>
      </Box>

      <Box>
        {renderInfoKey &&
          renderInfoKey?.map(key => (
            <Box key={key}>
              <Fade direction="up" duration={2000}>
                <Box className={s.info}>{`${key}: ${characterInfo[key]}`}</Box>
              </Fade>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default CharacterPage;
