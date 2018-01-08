import React, { Component } from "react";
import { Layout } from "antd";
import SearchBox from "../components/searchBox/searchBox";
import GifTable from "../components/gifTable/gifTable";

const { Content } = Layout;

class Home extends Component {
  render() {
    return <Content style={{ margin: "24px 16px 0" }}>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <SearchBox />
        <GifTable />
      </div>
    </Content>;
  }
}

export default Home;
