import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

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
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={cover} alt="cover" />
      <Chip label={category} />
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>

      <p className="blogItem-desc">{description}</p>
      <footer>
        {/* <Link className="blogItem-link" to={`/blog/${id}`}> */}
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        {/* </Link> */}

        <Link className="blogItem-link" to={`/blog/${id}`}>
          ⇦
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
