import * as React from 'react';
import { ChangeEvent, FC } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useStore } from '../../store/store';

type PropsType = {};
export const BasicPagination: FC<PropsType> = (): React.JSX.Element => {
  const {
    setSearchCurrentPage,
    searchValue,
    searchCurrentPage,
    setCurrentPage,
    currentPage,
    countSearch,
    numberOfCharacters,
  } = useStore();

  const count = countSearch || numberOfCharacters;
  const itemsOnPage = 10;
  let countPage;
  let page;

  if (count) {
    countPage = Math.ceil(count / itemsOnPage);
  }
  if (searchValue) {
    page = searchCurrentPage;
  } else {
    page = currentPage;
  }

  const handler = (event: ChangeEvent<unknown>, page: number): void => {
    if (searchValue) {
      setSearchCurrentPage(page);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <Stack spacing={1}>
      <Pagination
        count={countPage}
        page={page}
        color="standard"
        onChange={handler}
        shape="rounded"
      />
    </Stack>
  );
};
