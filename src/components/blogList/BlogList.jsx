import React from "react";
import BlogItem from "./blogItem/BlogItem";
import Box from "@mui/material/Box";

const BlogList = ({ blogs }) => {
  return (
    <Box component="div" className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </Box>
  );
};

export default BlogList;
