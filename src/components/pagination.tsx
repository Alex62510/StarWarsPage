import * as React from 'react';
import { ChangeEvent, FC } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PropsType = {
  countItems?: number;
  currentPage: number;
  setPage: (page: number) => void;
};
export const BasicPagination: FC<PropsType> = ({
  countItems,
  currentPage,
  setPage,
}): React.JSX.Element => {
  const itemsOnPage = 10;
  let countPage;

  if (countItems) {
    countPage = Math.ceil(countItems / itemsOnPage);
  }

  const handler = (event: ChangeEvent<unknown>, page: number): void => {
    setPage(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={countPage}
        page={currentPage}
        color="standard"
        onChange={handler}
        shape="rounded"
      />
    </Stack>
  );
};
