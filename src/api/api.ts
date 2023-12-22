import axios from 'axios';

import { CharacterInfoType, CharactersResponseType } from '../store/types';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/people',
});

export const charactersApi = {
  getCharacters(pageNumber: number) {
    return instance.get<CharactersResponseType>(`/?page=${pageNumber}`);
  },
  getCharacterInfo(id: number) {
    return instance.get<CharacterInfoType>(`/${id}`);
  },
  getSearchCharacters(name: string, page?: number) {
    if (page) {
      return instance.get<CharactersResponseType>(`/?search=${name}&page=${page}`);
    }

    return instance.get<CharactersResponseType>(`/?search=${name}`);
  },
};
