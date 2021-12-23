import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['购物', '吃饭', '交通', '其他']);
  return {tags, setTags};
};
export {useTags};