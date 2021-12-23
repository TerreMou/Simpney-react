import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 0;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  border: none;
  font-size: 18px;
  background: #aac9cb;
  padding: 8px 12px;
  border-radius: 4px;
  color: white;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px 16px 16px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right"/>
          </li>)}
      </TagList>
      <ButtonWrapper>
        <Button>新增标签</Button>
      </ButtonWrapper>
    </Layout>
  );
}

export default Tags;