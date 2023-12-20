import { create } from 'zustand';

import { charactersApi } from '../api/api';

import { CharacterType } from './types';

export type StoreType = {
  characters: CharacterType[];
  getCharacters: (pageNumber: number) => Promise<void>;
  numberOfCharacters: number;
  isLoading: boolean;
  error: boolean;
};

export const useStore = create<StoreType>(set => ({
  characters: [],
  numberOfCharacters: 0,
  isLoading: false,
  error: false,
  getCharacters: async (pageNumber: number) => {
    set({ isLoading: true });
    try {
      const res = await charactersApi.getCharacters(pageNumber);

      set({ characters: res.data.results });
      set({ numberOfCharacters: +res.data.count });
      set({ error: false });
    } catch {
      set({ error: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
