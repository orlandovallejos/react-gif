import React, { Component } from "react";
import { Button } from "antd";
import "./gifItem.css";

class GifItem extends Component {
  state = {
    isFav: ''
  };

  componentDidMount() {
    
    let myFavs = window.localStorage.getItem("items");
    if (myFavs) {
      myFavs = JSON.parse(myFavs);
      const indexFound = myFavs.indexOf(this.props.url);
      if (indexFound >= 0) {
        this.setState({isFav:' is-fav'});
      }
    }
  }

  saveOrRemoveGifItemHandler = url => {
    let myFavs = window.localStorage.getItem("items");
    if (myFavs) {
      myFavs = JSON.parse(myFavs);
    } else {
      myFavs = [];
    }

    const indexFound = myFavs.indexOf(url);
    if (indexFound >= 0) {
      myFavs.splice(indexFound, 1);
      this.setState({isFav:''});
    } else {
      myFavs.push(url);
      this.setState({isFav:' is-fav'});
    }

    window.localStorage.setItem("items", JSON.stringify(myFavs));
  };

  render() {
    return (
      <div className="gifItem">
        <img src={this.props.url} alt={this.props.name} className="img-item" />
        <Button
          type="primary"
          icon="heart"
          className={"fav-button" + this.state.isFav}
          onClick={() => this.saveOrRemoveGifItemHandler(this.props.url)}
        >
          Add to fav
        </Button>
      </div>
    );
  }
}

export default GifItem;
