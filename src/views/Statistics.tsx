import React, {useState} from 'react';
import Layout from '../components/Layout';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
import day from 'dayjs';
import {useTags} from '../hooks/useTags';

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getTagName} = useTags();
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <div>
        {records.map(r => {
          // TODO
          return <div key={records.indexOf(r)}>
            <div>
              {r.tagIds.map(tagId =>
                <span key={tagId}>{getTagName(tagId)} </span>
              )} | {r.amount}
            </div>
            <div>{day(r.createdAt).format('YYYY年MM月DD日')}</div>
            <hr/>
          </div>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;