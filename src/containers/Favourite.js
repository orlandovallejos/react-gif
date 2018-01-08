import React, { Component } from "react";
import { Layout } from "antd";

const { Content } = Layout;

class Favorite extends Component {
  render() {
    return <Content style={{ margin: "24px 16px 0" }}>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <h3>My favourite icons</h3>
      </div>
    </Content>;
  }
}

export default Favorite;
