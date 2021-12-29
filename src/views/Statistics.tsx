import React, {ReactNode, useState} from 'react';
import Layout from 'components/Layout';
import {CategorySection} from './Money/CategorySection';
import {RecordItem, useRecords} from 'hooks/useRecords';
import day from 'dayjs';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import {Chart} from '../components/Chart';
import {EChartOption} from 'echarts';

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
const Header = styled.h3`
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  color: #6c71b1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ChartWrapper = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  > .chart {
    width: 430%;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getTagName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  // hashObject = {'2021-12-27': [item,item,item,item,item], '2021-12-28': [item,item]}
  const hashObject: { [key: string]: RecordItem[] } = {};
  selectedRecords.forEach(r => {
      const key = day(r.createdAt).format('YYYY-MM-DD');
      if (!(key in hashObject)) {
        hashObject[key] = [];
      }
      hashObject[key].push(r);
    }
  );
  const hashArray = Object.entries(hashObject).sort((a, b) => {
    if (a[0] === b[0]) {return 0;}
    if (a[0] < b[0]) {return 1;}
    if (a[0] > b[0]) {return -1;}
    return 0;
  });
  type Result = {
    title?: string
    total?: number
  }
  // groupedResult: [{'2021-12-29',10000},{'2021-12-27':500},{'2021-12-28':2000}]
  const groupedResult: Result[] = [];
  hashArray.map(([date, item]) => {
    groupedResult.push({title: date, total: item.reduce((sum, i) => sum + i.amount, 0)});
    return groupedResult;
  });

  const [options, setOptions] = useState({});

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>

      <ChartWrapper>
        <Chart className="chart" options={options as EChartOption}/>
      </ChartWrapper>

      {hashArray.map(([date, item]) =>
        <div key={date}>
          <Header>
            <div>{date}</div>
            <div>
              ￥{groupedResult.map(obj => obj.title === date ?
                obj.total : '')}
            </div>
          </Header>
          <div>
            {item.map(r => {
              return <Item key={r.createdAt}>
                <div className="tags oneLine">
                  {r.tagIds
                    .map(tagId => <span key={tagId}>{getTagName(tagId)}</span>)
                    .reduce((result, currentValue, index, array) =>
                      result.concat(index < array.length - 1 ?
                        [currentValue, '，'] :
                        [currentValue]), [] as ReactNode[])
                  }
                </div>
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Statistics;