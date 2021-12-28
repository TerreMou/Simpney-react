import React, {useState} from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'
const defaultFormData = {
  category: '-' as Category,
  tagIds: [] as number[],
  note: '',
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  return (
    <MyLayout scrollTop={9999}>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <NumberPadSection value={selected.amount}
                        onOk={submit}
                        onChange={amount => onChange({amount})}/>
    </MyLayout>
  );
}

export default Money;