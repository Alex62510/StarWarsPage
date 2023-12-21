import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Paths } from '../constants/paths';
import { getId } from '../helpers/getCharacteresId';
import { useStore } from '../store/store';
import { CharacterType } from '../store/types';

import { BasicTable } from './table';

type PropsType = {
  renderCharacters: CharacterType[];
};
const Characters = ({ renderCharacters }: PropsType): React.JSX.Element => {
  const { characterInfo, getCharacterInfo } = useStore();
  const navigate = useNavigate();

  const handler = (url: string): void => {
    getCharacterInfo(getId(url));
  };

  useEffect(() => {
    if (characterInfo) {
      const id = getId(characterInfo.url);

      if (id) {
        navigate(`${Paths.character}/${id}`);
      }
    }
  }, [characterInfo]);

  return (
    <div>
      <BasicTable />
      {renderCharacters.map(person => (
        <div onDoubleClick={() => handler(person.url)} key={getId(person.url)}>
          {person.name}
        </div>
      ))}
    </div>
  );
};

export default Characters;
