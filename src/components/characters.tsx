import React from 'react';

import { getId } from '../helpers/getCharacteresId';
import { useStore } from '../store/store';

const Characters = (): React.JSX.Element => {
  const { characters } = useStore();

  return (
    <div>
      {characters.map(person => (
        <div key={getId(person.url)}>{person.name}</div>
      ))}
    </div>
  );
};

export default Characters;
