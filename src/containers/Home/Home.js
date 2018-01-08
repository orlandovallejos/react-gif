import React, { Component } from "react";
import { Layout } from "antd";
import SearchBox from "../../components/searchBox/searchBox";
import GifTable from "../../components/gifTable/gifTable";
import { api } from "../../api/axios-gif";

const { Content } = Layout;

class Home extends Component {
  state = {
    trendingItems: [],
    searchItems: []
  };

  componentDidMount() {
    api
      .getTrending()
      .then(response => {
        // console.log(response);
        var items = response.data.data.map(item => {
          return {
            url: item.images["fixed_height"].url,
            name: item.title
          };
        });
        this.setState({ trendingItems: items });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {}

  searchHandler = text => {
    api
      .search(text)
      .then(response => {
        // console.log(response);
        var items = response.data.data.map(item => {
          return {
            url: item.images["fixed_height"].url,
            name: item.title
          };
        });
        this.setState({ searchItems: items });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let results = null;
    if (this.state.searchItems.length > 0) {
      results = (
        <GifTable items={this.state.searchItems} />
      );
    } else {
      results = <GifTable items={this.state.trendingItems} />;
    }

    return (
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <SearchBox search={this.searchHandler} />
          {results}
        </div>
      </Content>
    );
  }
}

export default Home;
