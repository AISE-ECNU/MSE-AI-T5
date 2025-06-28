import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import OverviewChart from "../components/overview-chart";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const BasicLayout = ({ repo }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "100%",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          {repo}深度分析报告
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* <Layout> */}
          {/* <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          /> */}
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "20px 0",
              padding: "10px 0",
              color: "#000000",
            }}
          >
            概览
          </div>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <OverviewChart repo={repo} />
          </Content>

          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              margin: "20px 0",
              padding: "10px 0",
              color: "#000000",
            }}
          >
            项目深度洞察
          </div>
          <Content>
            <OverviewChart repo={repo} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
