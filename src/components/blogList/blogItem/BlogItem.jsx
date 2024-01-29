import React from "react";
import Box from "@mui/material/Box";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <Box component="div" className="blogItem-wrap">
      <Box component="img" className="blogItem-cover" src={cover} alt="cover" />
      <Box component="p" className="chip">
        {category}
      </Box>
    </Box>
  );
};

export default BlogItem;
