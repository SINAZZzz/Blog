import { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { blogList } from "../../config/data.js";
import Header from "../../components/header/Header.tsx";
import SearchBar from "../../components/search/SearchBar.jsx";
import Loading from "../../components/loading/Loading.jsx";
import BlogList from "../../components/blogList/BlogList.jsx";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleChange = (e) => {
    const selectedColor = e.target.value;
    setBackgroundColor(selectedColor);
    document.body.style.backgroundColor = selectedColor; // Change body background color
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
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <Box component="div" style={{ minHeight: "100vh" }}>
      <Select
        labelId="colorSelectLabel"
        id="colorSelect"
        // value={backgroundColor}
        onChange={handleChange}
        sx={{ width: "50px", height: "50px", borderRadius: "50px" }}
      >
        <MenuItem value="white">White</MenuItem>
        <MenuItem value="lightgray">lightgray</MenuItem>
        <MenuItem value="lightblue">Light Blue</MenuItem>
        <MenuItem value="lightgreen">Light Green</MenuItem>
        <MenuItem value="lightpink">Light Pink</MenuItem>
        <MenuItem value="lightyellow">Light Yellow</MenuItem>
      </Select>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <Loading /> : <BlogList blogs={blogs} />}
    </Box>
  );
};

export default Home;
