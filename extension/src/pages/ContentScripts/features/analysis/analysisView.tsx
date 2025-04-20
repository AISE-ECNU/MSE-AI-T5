import React from 'react';
import * as echarts from 'echarts';
import { Button } from 'antd';
import {
  getRepoName
} from "../../../../helpers/get-github-repo-info";

interface Props {
  activity: [string, number][];
  openrank: [string, number][];
  attention: [string, number][];
  participant: [string, number][];
  contributor: [string, number][];
  meta: any;
}

const AnalysisView: React.FC<Props> = ({
  activity,
  openrank,
  attention,
  participant,
  contributor,
  meta,
}) => {
  const repoName = getRepoName();
  const chartRefs = {
    activity: React.useRef<HTMLDivElement>(null),
    openrank: React.useRef<HTMLDivElement>(null),
    attention: React.useRef<HTMLDivElement>(null),
    participant: React.useRef<HTMLDivElement>(null),
    contributor: React.useRef<HTMLDivElement>(null),
  };

  const chartsRef = React.useRef<echarts.ECharts[]>([]);

  const createChartOption = (data: [string, number][], title: string, color: string) => {
    const recentMonths = data.slice(-12);
    const monthlyData = recentMonths.map(item => item[1]);
    const monthLabels = recentMonths.map(item => {
      const [year, month] = item[0].split('-');
      return `${month}月`;
    });

    return {
      title: {
        text: title,
        textStyle: {
          fontSize: 14,
          fontWeight: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params: any) {
          const dataIndex = params[0].dataIndex;
          const [year, month] = recentMonths[dataIndex][0].split('-');
          return `${year}年${month}月: ${params[0].value.toFixed(2)}`;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: monthLabels,
        boundaryGap: false,
        axisLabel: {
          interval: 0,
          rotate: 30
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      series: [
        {
          type: 'line',
          data: monthlyData,
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          itemStyle: {
            color: color
          },
          lineStyle: {
            width: 2
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: `${color}4D`
              },
              {
                offset: 1,
                color: `${color}1A`
              }
            ])
          }
        }
      ]
    };
  };

  const initializeCharts = React.useCallback(() => {
    chartsRef.current.forEach(chart => {
      chart?.dispose();
    });
    chartsRef.current = [];

    const chartConfigs = [
      { ref: chartRefs.openrank, data: openrank, title: 'OpenRank趋势', color: '#4ECDC4' },
      { ref: chartRefs.activity, data: activity, title: '活跃度趋势', color: '#FF6B6B' },
      { ref: chartRefs.attention, data: attention, title: '用户欢迎度', color: '#45B7D1' },
      { ref: chartRefs.contributor, data: contributor, title: '支持响应度', color: '#96CEB4' }
    ];

    chartConfigs.forEach(config => {
      if (config.ref.current && config.data?.length) {
        const chart = echarts.init(config.ref.current);
        chart.setOption(createChartOption(config.data, config.title, config.color));
        chartsRef.current.push(chart);
      }
    });
  }, [activity, openrank, attention, contributor]);

  React.useEffect(() => {
    initializeCharts();

    const handleResize = () => {
      chartsRef.current.forEach(chart => {
        chart?.resize();
      });
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    Object.values(chartRefs).forEach(ref => {
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }
    });

    return () => {
      chartsRef.current.forEach(chart => {
        chart?.dispose();
      });
      chartsRef.current = [];
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [initializeCharts]);

  return (
    <div style={{ width: '800px', padding: '20px' }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <span style={{
          fontSize: '18px',
          fontWeight: 'bold',
        }}>
          {repoName.split("/")[1]} 项目分析
        </span>
        <span style={{
          fontSize: '12px',
          backgroundColor: '#fff2e8',
          color: '#ff4d4f',
          padding: '2px 8px',
          borderRadius: '12px',
          display: 'inline-flex',
          alignItems: 'center'
        }}>
          近期火热🔥
        </span>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <div ref={chartRefs.openrank} style={{ height: '250px' }} />
        <div ref={chartRefs.activity} style={{ height: '250px' }} />
        <div ref={chartRefs.attention} style={{ height: '250px' }} />
        <div ref={chartRefs.contributor} style={{ height: '250px' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button type="primary">
          查看详细分析
        </Button>
      </div>
    </div>
  );
};

export default AnalysisView;
