/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button } from "@mui/material";
import Header from "../../components/header/Header.tsx";
import { blogList } from "../../config/data.js";
import { useState } from "react";
import SearchBar from "../../components/header/SearchBar.jsx";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
    // You can perform additional actions here, such as filtering data based on the search value
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  // const handleClearSearch = () => {
  //   // setBlogs(blogList);
  //   // setSearchKey("");
  // };
  return (
    <Box component="div">
      <Header />
      {/* search  bar */}
      {/* <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      /> */}
      <SearchBar
        value={searchValue}
        onChange={handleSearchChange}
        onClear={handleClearSearch}
      />
    </Box>
  );
};

export default Home;
