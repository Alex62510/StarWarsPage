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
  search: CharacterType[] | null;
  getSearch: (name: string, page?: number) => void;
  countSearch: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setSearchCurrentPage: (searchCurrentPage: number) => void;
  setSearch: (search: CharacterType[] | null, items: number) => void;
  searchCurrentPage: number;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export const useStore = create<StoreType>(set => ({
  characters: [],
  characterInfo: null,
  numberOfCharacters: 0,
  isLoading: false,
  error: false,
  search: null,
  countSearch: 0,
  searchCurrentPage: 1,
  currentPage: 1,
  searchValue: '',
  setSearchValue: (value: string) => set({ searchValue: value }),
  setSearch: (value: CharacterType[] | null, items: number) => {
    set({ search: value });
    set({ countSearch: items });
  },
  setSearchCurrentPage: (searchPage: number) => set({ searchCurrentPage: searchPage }),
  setCurrentPage: (page: number) => set({ currentPage: page }),
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
  getSearch: async (name: string, page?: number) => {
    set({ isLoading: true });
    try {
      if (!name) {
        set({ countSearch: 0 });
        set({ search: null });
        set({ error: false });
      }
      const res = await charactersApi.getSearchCharacters(name, page);

      set({ countSearch: res.data.count });
      set({ search: res.data.results });
      set({ error: false });
    } catch {
      set({ error: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
