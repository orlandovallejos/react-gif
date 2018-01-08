import React from "react";
import { Row, Col } from "antd";
import GifItem from "./gifItem/gifItem";

const gifTable = props => {
  let cols = null;
  if (props.items) {
    cols = props.items.map(item => {
      return (
        <Col span={6} key={item.url}>
          <GifItem url={item.url} name={item.name} />
        </Col>
      );
    });
  }

  return <Row>{cols}</Row>;
};

export default gifTable;
