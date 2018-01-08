import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./containers/Home/Home";
import Favourite from "./containers/Favourite/Favourite";
import "./App.css";

const { Header, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <NavLink to="/">
                  <Icon type="user" />
                  <span className="nav-text">Home</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/favourite">
                  <Icon type="heart" />
                  <span className="nav-text">Favourite</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <h1 style={{ padding: "10px" }}>Giphy finder</h1>
            </Header>
            <Route path="/" exact={true} component={Home} />
            <Route path="/favourite" exact={true} component={Favourite} />
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
