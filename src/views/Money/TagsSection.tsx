import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  flex-grow: 1;
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      display: inline-block;
      background: #aac9cb;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      
      &.selected {
        background: #6c71b1;
        color: white;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 2px solid #aac9cb;
    color: #666;
    margin-top: 8px;
  }
`;

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['购物', '吃饭', '交通', '其他']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名');
    if (tagName !== null) {
      if (tags.indexOf(tagName) >= 0) {
        window.alert('标签名重复了');
      } else {
        tagName !== '' ?
          setTags([...tags, tagName]) :
          window.alert('标签名不能为空');
      }
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if (index >= 0) {
      selectedTags.splice(index,1)
      setSelectedTags([...selectedTags])
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const getClass = (tag:string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li
          onClick={() => onToggleTag(tag)}
          className={getClass(tag)}
          key={tag}>
          {tag}
        </li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};