import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '购物'},
        {id: createId(), name: '吃饭'},
        {id: createId(), name: '交通'},
        {id: createId(), name: '其他'}
      ];
    }
    setTags(localTags)
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const getTagName = (id:number) => {
    const tag = tags.filter(tag => tag.id === id)[0]
    return tag ? tag.name : ''
  }

  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));

    // const index = findTagIndex(id);
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // tagsClone.splice(index, 1, {id: id, name: obj.name});
    // setTags(tagsClone);
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const newTagName = window.prompt('请输入标签名');
    const tagNames = tags.map(tag => tag.name);
    if (newTagName !== null) {
      if (tagNames.indexOf(newTagName.trim()) >= 0) {
        window.alert('标签名重复了');
      } else {
        newTagName.trim() !== '' ?
          setTags([...tags, {id: createId(), name: newTagName.trim()}]) :
          window.alert('标签名不能为空');
      }
    }
  };

  return {tags, setTags, getTagName, addTag, findTag, updateTag, findTagIndex, deleteTag};
};
export {useTags};