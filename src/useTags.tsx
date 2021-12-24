import {useState} from 'react';
import {createId} from 'lib/createId';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {id: createId(), name: '购物'},
    {id: createId(), name: '吃饭'},
    {id: createId(), name: '交通'},
    {id: createId(), name: '其他'}]);
  return {tags, setTags};
};
export {useTags};