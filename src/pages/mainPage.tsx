import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Characters from '../components/characters';
import { BasicPagination } from '../components/pagination';
import { Paths } from '../constants/paths';
import Preloader from '../helpers/Preloader';
import { useStore } from '../store/store';

const MainPage = (): React.JSX.Element => {
  const [page, setPage] = useState(1);
  const { error, isLoading, getCharacters, numberOfCharacters } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacters(page);
  }, [page]);

  if (error) {
    navigate(Paths.error);
  }

  return (
    <div>
      {isLoading ? <Preloader /> : <Characters />}
      <BasicPagination
        setPage={setPage}
        countItems={numberOfCharacters}
        currentPage={page}
      />
    </div>
  );
};

export default MainPage;
