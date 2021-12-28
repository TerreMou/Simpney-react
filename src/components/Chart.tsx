import React, {useEffect, useRef, useState} from 'react';
import {EChartOption, ECharts, getInstanceByDom, init} from 'echarts';

type Props = {
  options?: EChartOption
}
const Chart: React.FC<Props> = (props) => {
  const {options} = props;
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    // Initialize chart
    let chart: ECharts | undefined
    if (chartRef.current !== null) {
      chart = init(chartRef.current)
      chart.setOption(options as EChartOption)
    }
  },[])

  useEffect(()=>{
    // update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart.setOption(options as EChartOption)
    }
  },[options])

  return (
    <div ref={chartRef}/>
  );
};

export {Chart};