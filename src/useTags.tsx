import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {id: 1, name: '购物'},
    {id: 2, name: '吃饭'},
    {id: 3, name: '交通'},
    {id: 4, name: '其他'}]);
  return {tags, setTags};
};
export {useTags};