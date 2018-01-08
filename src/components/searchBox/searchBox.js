import React from "react";
import { Input } from "antd";
const Search = Input.Search;

const SearchBox = (props) => {
  return (
    <div>
      <h3>Search funny gifs</h3>
      <Search
        placeholder="input search text"
        onSearch={props.search}
        enterButton={true}
      />
    </div>
  );
};

export default SearchBox;
