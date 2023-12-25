import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import { useDebounce } from '../../helpers/useDebounce';
import { useStore } from '../../store/store';

export const SearchInput = (): React.JSX.Element => {
  const {
    setCurrentPage,
    setSearchValue,
    setSearch,
    getSearch,
    searchCurrentPage,
    setSearchCurrentPage,
  } = useStore();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (!debouncedValue) {
      setSearch(null, 0);
      setSearchValue('');
      setSearchCurrentPage(1);
    } else {
      getSearch(debouncedValue, searchCurrentPage);
      setSearchValue(value);
      setCurrentPage(1);
    }
  }, [debouncedValue, searchCurrentPage]);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setValue(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 3px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
        backgroundColor: 'darkgrey',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search of characters"
        onChange={handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '5px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
