import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Paths } from '../constants/paths';
import { getId } from '../helpers/getCharacteresId';
import Preloader from '../helpers/Preloader';
import { useStore } from '../store/store';

const Characters = (): React.JSX.Element => {
  const { getCharacterInfo, characters, isLoading, characterInfo } = useStore();
  const navigate = useNavigate();
  const handler = (url: string) => {
    getCharacterInfo(getId(url));
  };

  useEffect(() => {
    if (characterInfo) {
      const id = getId(characterInfo.url);

      id && navigate(`${Paths.character}/${id}`);
    }
  }, [characterInfo]);

  return (
    <div>
      {characters.map(person => (
        <div onDoubleClick={() => handler(person.url)} key={getId(person.url)}>
          {person.name}
        </div>
      ))}
    </div>
  );
};

export default Characters;
