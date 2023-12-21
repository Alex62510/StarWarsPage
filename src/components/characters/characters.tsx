import React from 'react';

import { getId } from '../../helpers/getCharacteresId';
import { useStore } from '../../store/store';
import { CharacterType } from '../../store/types';
import { BasicTable } from '../table';

import s from './characters.module.css';

type PropsType = {
  renderCharacters: CharacterType[];
};
const Characters = ({ renderCharacters }: PropsType): React.JSX.Element => {
  const { getCharacterInfo } = useStore();

  const handler = (url: string): void => {
    getCharacterInfo(getId(url));
  };

  return (
    <div className={s.characters}>
      <BasicTable renderCharacters={renderCharacters} handler={handler} />
    </div>
  );
};

export default Characters;
