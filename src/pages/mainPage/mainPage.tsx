import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Characters from '../../components/characters/characters';
import { BasicPagination } from '../../components/pagination';
import { SearchInput } from '../../components/searchInput';
import { Paths } from '../../constants/paths';
import { getId } from '../../helpers/getCharacteresId';
import Preloader from '../../helpers/Preloader';
import { useStore } from '../../store/store';
import { CharacterType } from '../../store/types';

import s from './mainePage.module.css';

const MainPage = React.memo(() => {
  const [page, setPage] = useState(1);
  const {
    characterInfo,
    error,
    getCharacters,
    characters,
    isLoading,
    numberOfCharacters,
  } = useStore();
  const navigate = useNavigate();
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[] | null>(
    null,
  );
  const renderCharacters = filteredCharacters || characters;

  useEffect(() => {
    getCharacters(page);
    setFilteredCharacters(null);
  }, [page]);

  useEffect(() => {
    if (error) {
      navigate(Paths.error);
    }
  }, [error]);

  useEffect(() => {
    if (characterInfo) {
      const id = getId(characterInfo.url);

      if (id) {
        navigate(`${Paths.character}/${id}`);
      }
    }
  }, [characterInfo]);

  return (
    <>
      {isLoading && <Preloader />}
      <div className={s.container}>
        <SearchInput setFilteredCharacters={setFilteredCharacters} />
        <Characters renderCharacters={renderCharacters} />
        <BasicPagination
          setPage={setPage}
          countItems={numberOfCharacters}
          currentPage={page}
        />
      </div>
    </>
  );
});

export default MainPage;
