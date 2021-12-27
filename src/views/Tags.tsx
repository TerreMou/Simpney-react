import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {ButtonWrapper} from '../components/ButtonWrapper';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    margin-right: 16px;
    
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
    }
  }
`;

function Tags() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>)}
      </TagList>
      <ButtonWrapper>
        <Button onClick={addTag}>新增标签</Button>
      </ButtonWrapper>
    </Layout>
  );
}

export default Tags;