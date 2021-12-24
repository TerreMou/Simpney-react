import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';

type Params = {
  id: string
}
const TagEdit: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>(); // 拿到当前 url 的 id
  const tag = findTag(parseInt(id));

  return (
    <div>{tag.name}</div>
  );
};

export {TagEdit};