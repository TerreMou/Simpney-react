import React, {useState} from 'react';
import Layout from '../components/Layout';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
import day from 'dayjs';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  > .amount {
    color: #aac9cb;
  }
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getTagName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <div>
        {selectedRecords.map(r => {
          return <Item key={records.indexOf(r)}>
            <div className="tags">
              {r.tagIds.map(tagId =>
                <span key={tagId}>{getTagName(tagId)} </span>
              )}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              ￥{r.amount}
            </div>
            {/*<div>{day(r.createdAt).format('YYYY年MM月DD日')}</div>*/}
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;