import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { metaStore } from "../../api/common.ts";
import {
  getOpenrank,
  getActivity,
  getIssueComments,
  getAttention,
} from "../../api/repo.ts";
import generateDataByMonth from "../../helpers/generate-data-by-month.ts";

const OverviewChart = ({ repo }) => {
  const [chartData, setChartData] = useState({
    openrankData: [],
    activityData: [],
    issueCommentsData: [],
    attentionData: [],
  });

  const filterLastYearData = (data) => {
    if (!data || data.length === 0) return [];

    const now = new Date();
    const oneYearAgo = new Date(now.setFullYear(now.getFullYear() - 1));

    return data.filter((item) => {
      const itemDate = new Date(item[0]);
      return itemDate >= oneYearAgo;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const meta = await metaStore.get("github", repo);
      const openrank = await getOpenrank("github", repo);
      const activity = await getActivity("github", repo);
      const issuecomments = await getIssueComments("github", repo);
      const attention = await getAttention("github", repo);

      const rawOpenrankData = generateDataByMonth(openrank, meta.updatedAt);
      const rawActivityData = generateDataByMonth(activity, meta.updatedAt);
      const rawIssueCommentsData = generateDataByMonth(
        issuecomments,
        meta.updatedAt
      );
      const rawAttentionData = generateDataByMonth(attention, meta.updatedAt);

      setChartData({
        openrankData: filterLastYearData(rawOpenrankData),
        activityData: filterLastYearData(rawActivityData),
        issueCommentsData: filterLastYearData(rawIssueCommentsData),
        attentionData: filterLastYearData(rawAttentionData),
      });
    };

    fetchData();
  }, [repo]);

  const option = {
    title: {
      text: "概览",
      left: "20px",
      top: "20px",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        let result =
          new Date(params[0].axisValue).toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "2-digit",
          }) + "<br/>";
        params.forEach((param) => {
          result +=
            param.marker +
            " " +
            param.seriesName +
            ": " +
            param.value[1].toFixed(2) +
            "<br/>";
        });
        return result;
      },
    },
    legend: {
      data: ["OpenRank指数", "贡献活跃度", "社区服务与支撑", "用户欢迎度"],
      top: "20px",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
      axisLabel: {
        formatter: "{yyyy}-{MM}",
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "OpenRank指数",
        type: "line",
        data: chartData.openrankData,
        smooth: true,
        symbol: "none",
        itemStyle: { color: "#5470c6" },
      },
      {
        name: "贡献活跃度",
        type: "line",
        data: chartData.activityData,
        smooth: true,
        symbol: "none",
        itemStyle: { color: "#91cc75" },
      },
      {
        name: "社区服务与支撑",
        type: "line",
        data: chartData.issueCommentsData,
        smooth: true,
        symbol: "none",
        itemStyle: { color: "#fac858" },
      },
      {
        name: "用户欢迎度",
        type: "line",
        data: chartData.attentionData,
        smooth: true,
        symbol: "none",
        itemStyle: { color: "#ee6666" },
      },
    ],
  };

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "8px" }}>
      <ReactECharts
        option={option}
        style={{ height: "400px" }}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
};

export default OverviewChart;
