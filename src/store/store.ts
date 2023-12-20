import { create } from 'zustand';

import { charactersApi } from '../api/api';

import { CharacterInfoType, CharacterType } from './types';

export type StoreType = {
  characters: CharacterType[];
  getCharacters: (pageNumber: number) => Promise<void>;
  getCharacterInfo: (id: number | null) => Promise<void>;
  numberOfCharacters: number;
  isLoading: boolean;
  error: boolean;
  characterInfo: CharacterInfoType | null;
};

export const useStore = create<StoreType>(set => ({
  characters: [],
  characterInfo: null,
  numberOfCharacters: 0,
  isLoading: false,
  error: false,
  getCharacterInfo: async (id: number | null) => {
    set({ isLoading: true });
    if (id) {
      try {
        const res = await charactersApi.getCharacterInfo(id);

        if (res) {
          set({ characterInfo: res.data });
        }
        set({ error: false });
      } catch {
        set({ error: true });
      } finally {
        set({ isLoading: false });
      }
    } else {
      set({ characterInfo: null });
    }
  },
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
