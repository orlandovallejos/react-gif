import React from "react";
import { Button } from "antd";
import "./gifItem.css";

const gifItem = props => {
  return (
    <div className="gifItem">
      <img src={props.url} alt={props.name} className="img-item" />
      <Button type="primary" icon="heart" className="fav-button">
        Add to fav
      </Button>
    </div>
  );
};

export default gifItem;
