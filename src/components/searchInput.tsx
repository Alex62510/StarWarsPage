import * as React from 'react';
import { ChangeEvent } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import { search } from '../helpers/filtred';
import { useStore } from '../store/store';
import { CharacterType } from '../store/types';

type PropsTyp = {
  setFiltredCharacters: React.Dispatch<React.SetStateAction<CharacterType[] | null>>;
};
export const SearchInput = ({ setFiltredCharacters }: PropsTyp): React.JSX.Element => {
  const { characters } = useStore();

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    setFiltredCharacters(search(event.target.value, characters));
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search of characters"
        onChange={handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
