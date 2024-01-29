import { Box } from "@mui/material";
import Header from "../../components/header/Header.tsx";
import { blogList } from "../../config/data.js";
import { useState } from "react";
import SearchBar from "../../components/search/SearchBar.jsx";
import Loading from "../../components/loading/Loading.jsx";
import BlogList from "../../components/blogList/BlogList.jsx";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

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

  console.log(blogs);

  return (
    <Box component="div">
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
