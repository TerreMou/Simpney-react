import React from 'react';
import {useTags} from 'useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import {ButtonWrapper} from 'components/ButtonWrapper';
import {Input} from 'components/Input';

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
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>(); // 拿到当前 url 的 id, 重命名为 idString
  const tag = findTag(parseInt(idString));
  const history = useHistory()
  const onClickBack = ()=>{
    history.goBack()
  }
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input type="text" label="标签名"
               value={tag.name}
               onChange={(e) =>
                 updateTag(tag.id, {name: e.target.value})}/>
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </ButtonWrapper>
    </div>
  );
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <ButtonWrapper>tag 不存在</ButtonWrapper>}
    </Layout>
  );
};

export {TagEdit};