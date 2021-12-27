import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';
import {createId} from 'lib/createId';

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

type Props = {
  value: number[];
  onChange: (value: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags(); // tags 是 {id:1, name:'xxx'}的对象数组
  const selectedTagIds = props.value;

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      selectedTagIds.splice(index, 1);
      props.onChange([...selectedTagIds]);
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';

  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li
          onClick={() => onToggleTag(tag.id)}
          className={getClass(tag.id)}
          key={tag.id}>
          {tag.name}
        </li>)}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};