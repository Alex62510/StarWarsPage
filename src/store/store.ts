import { create } from 'zustand';

import { charactersApi } from '../api/api';

import { CharacterType } from './types';

type StoreType = {
  characters: CharacterType[];
  getCharacters: () => Promise<void>;
};

export const useStore = create<StoreType>(set => ({
  characters: [],
  getCharacters: async () => {
    const res = await charactersApi.getCharacters();
    const { results } = res.data;

    set({ characters: results });
  },
}));
