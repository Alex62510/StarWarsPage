import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Characters from '../../components/characters/characters';
import { BasicPagination } from '../../components/pagination';
import { SearchInput } from '../../components/searchInput';
import { Paths } from '../../constants/paths';
import Preloader from '../../helpers/Preloader';
import { useStore } from '../../store/store';

import s from './mainePage.module.css';

const MainPage = React.memo(() => {
  const [page, setPage] = useState(1);
  const { search, error, getCharacters, characters, isLoading, numberOfCharacters } =
    useStore();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  useEffect(() => {
    if (error) {
      navigate(Paths.error);
    }
  }, [error, navigate]);

  const renderCharacters = search !== null ? search : characters;

  return (
    <div>
      {isLoading && <Preloader />}
      <div className={s.container}>
        <SearchInput />
        {!isLoading && <Characters renderCharacters={renderCharacters} />}
        <BasicPagination
          setPage={setPage}
          countItems={numberOfCharacters}
          currentPage={page}
        />
      </div>
    </div>
  );
});

export default MainPage;
