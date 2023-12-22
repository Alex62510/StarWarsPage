import { CharacterType } from '../store/types';

export const filtredItems = (quary: string, items: CharacterType[]): CharacterType[] => {
  if (!quary) {
    return items;
  }
  const loverCaseQuary = quary.toLocaleLowerCase();

  return items.filter(t => t.name.toLocaleLowerCase().includes(loverCaseQuary));
};
