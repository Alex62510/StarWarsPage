import axios from 'axios';

import { CharactersResponseType } from '../store/types';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const charactersApi = {
  getCharacters() {
    return instance.get<CharactersResponseType>('/people/?page=9');
  },
};
