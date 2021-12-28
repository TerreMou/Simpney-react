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
`;
const ChartWrapper = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

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

  const [options, setOptions] = useState({
    grid: {
      left: 0,
      right: 0,
    },
    xAxis: {
      type: 'category',
      data: hashArray.map(([date,item]) => date),
      axisTick: {
        alignWithLabel: true, // 横轴刻度和坐标对齐
      },
      axisLine: {
        lineStyle: {color: '#666'}
      },
      axisLabel: {
        formatter: function (value: string) {
          return value.substring(5);
        }
      }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: hashArray.map(([date,item]) => item.map(r=>r.amount)),
      type: 'line',
      symbolSize: 12,
      itemStyle: {borderWidth: 1, color: '$color-line'},
      // symbol: 'circle',
    }],
    tooltip: {
      show: true,
      position: 'top',
      formatter: '{c}',
      triggerOn: 'click',
    },
  })

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <ChartWrapper>
        <div>hi</div>
        <Chart options={options as EChartOption}/>
      </ChartWrapper>

      {hashArray.map(([date, item]) =>
        <div key={date}>
          <Header>{date}</Header>
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