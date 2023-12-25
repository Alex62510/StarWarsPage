import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../constants/paths';
import { getId } from '../../helpers/getCharacteresId';
import { useStore } from '../../store/store';
import { BasicTable } from '../table/table';

import s from './characters.module.css';

const Characters = (): React.JSX.Element => {
  const navigate = useNavigate();
  const {
    search,
    setSearchCurrentPage,
    setCurrentPage,
    characters,
    searchValue,
    currentPage,
    getCharacters,
  } = useStore();
  const handler = (url: string): void => {
    const id = getId(url);

    if (id) {
      navigate(`${Paths.character}/${id}`);
    }
  };

  useEffect(() => {
    if (!searchValue) {
      getCharacters(currentPage);
      setSearchCurrentPage(1);
    }
    if (searchValue) {
      setCurrentPage(1);
    }
  }, [currentPage]);

  const renderCharacters = search !== null ? search : characters;

  return (
    <Box className={s.characters}>
      <BasicTable renderCharacters={renderCharacters} handler={handler} />
    </Box>
  );
};

export default Characters;
