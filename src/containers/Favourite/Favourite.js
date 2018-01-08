import React, { Component } from "react";
import { Layout } from "antd";
import GifTable from "../../components/gifTable/gifTable";

const { Content } = Layout;

class Favorite extends Component {
  state = {
    favItems: []
  };

  componentDidMount() {
    let myFavs = window.localStorage.getItem("items");
    if (myFavs) {
      myFavs = JSON.parse(myFavs);
      let myFavsArray = myFavs.map(url => {
        return {
          url: url,
          name: ""
        };
      });
      this.setState({ favItems: myFavsArray });
    }
  }

  render() {
    return (
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <h3>My favourite gifs</h3>

          <GifTable items={this.state.favItems} />
        </div>
      </Content>
    );
  }
}

export default Favorite;
