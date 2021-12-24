import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import {ButtonWrapper} from 'components/ButtonWrapper';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  id: string
}
const TagEdit: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Params>(); // 拿到当前 url 的 id
  const tag = findTag(parseInt(id));

  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>

      <label>
        <span>标签名</span>
        <input type="text"
        />
      </label>

      <ButtonWrapper>
        <Button>删除标签</Button>
      </ButtonWrapper>


    </Layout>
  );
};

export {TagEdit};