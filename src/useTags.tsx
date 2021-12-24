import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
  {id: createId(), name: '购物'},
  {id: createId(), name: '吃饭'},
  {id: createId(), name: '交通'},
  {id: createId(), name: '其他'}
];

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  return {tags, setTags};
};
export {useTags};