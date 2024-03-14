import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./style.css";

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
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <Box
          component="img"
          className="blogItem-cover"
          src={cover}
          alt="cover"
        />
      </Link>
      <Box component="p" className="chip">
        {category}
      </Box>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <Box component="h3">{title}</Box>
      </Link>

      <Box component="p" className="blogItem-desc">
        {description}
      </Box>
      <Box component="footer">
        <Box component="div" className="blogItem-author">
          <Link to={`/profile/${id}`}>
            <Box component="img" src={authorAvatar} alt="avatar" />
          </Link>
        </Box>
        <Box component="div" className="blogItem-author">
          <Box component="h6">{authorName}</Box>
          <Box component="p">{createdAt}</Box>
        </Box>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ⇦
        </Link>
      </Box>
    </Box>
  );
};

export default BlogItem;
