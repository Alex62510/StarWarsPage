import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Paths } from '../../constants/paths';
import { getId } from '../../helpers/getCharacteresId';
import { CharacterType } from '../../store/types';
import { BasicTable } from '../table';

import s from './characters.module.css';

type PropsType = {
  renderCharacters: CharacterType[];
};
const Characters = ({ renderCharacters }: PropsType): React.JSX.Element => {
  const navigate = useNavigate();
  const handler = (url: string): void => {
    const id = getId(url);

    if (id) {
      navigate(`${Paths.character}/${id}`);
    }
  };

  return (
    <div className={s.characters}>
      <BasicTable renderCharacters={renderCharacters} handler={handler} />
    </div>
  );
};

export default Characters;
