import React from 'react';

import { useStore } from '../store/store';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MainPage = () => {
  const { getCharacters, characters } = useStore();

  console.log(characters);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" onClick={() => getCharacters()}>
        Add
      </button>
    </div>
  );
};

export default MainPage;
