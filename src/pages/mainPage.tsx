import React from 'react';

import { getId } from '../helpers/getCharacteresId';
import { useStore } from '../store/store';

const MainPage = (): React.JSX.Element => {
  const { getCharacters, characters } = useStore();

  return (
    <div>
      {characters.map(person => (
        <div key={getId(person.url)}>{person.name}</div>
      ))}
      <button type="button" onClick={() => getCharacters()}>
        Add
      </button>
    </div>
  );
};

export default MainPage;
