import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Characters from '../../components/characters/characters';
import { BasicPagination } from '../../components/pagination/pagination';
import { SearchInput } from '../../components/searchInput/searchInput';
import { Paths } from '../../constants/paths';
import Preloader from '../../helpers/Preloader';
import { useStore } from '../../store/store';

import s from './mainePage.module.css';

const MainPage = (): React.JSX.Element => {
  const {
    setCurrentPage,
    currentPage,
    countSearch,
    error,
    isLoading,
    numberOfCharacters,
  } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate(Paths.error);
    }
  }, [error, navigate]);

  const count = countSearch || numberOfCharacters;

  return (
    <Box>
      {isLoading && <Preloader />}
      <Box className={s.container}>
        <SearchInput />
        <Characters />
        <BasicPagination
          setPage={setCurrentPage}
          countItems={count}
          currentPage={currentPage}
        />
      </Box>
    </Box>
  );
};

export default MainPage;
