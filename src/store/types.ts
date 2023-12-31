export type CharacterType = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type CharactersResponseType = {
  count: number;
  next: string;
  previous: null | string;
  results: CharacterType[];
};
export type CharacterInfoType = {
  [key: string]: string | string[] | undefined;
  url: string;
};
