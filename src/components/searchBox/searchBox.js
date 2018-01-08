import React from "react";
import { Input } from "antd";
const Search = Input.Search;

const SearchBox = (props) => {
  return (
    <div>
      <h3>Search funny gifs</h3>
      <Search
        placeholder="Search the gifs from the future"
        onSearch={props.search}
        enterButton={true}
      />
    </div>
  );
};

export default SearchBox;
