import React, { useContext } from "react";
import { blogList } from "../../config/data.js";
import { AppContext } from "../../context/AppContext.jsx";
import "./style.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Profile() {
  const { id } = useContext(AppContext);
  console.log(id);

  const profile = blogList.find((profile) => profile.id === id);

  if (!profile) {
    return <div>No data found for this ID.</div>;
  }

  return (
    <div>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      <div className="profile">
        <img
          src={profile.authorAvatar}
          alt="pic user"
          className="authorAvatar"
        />
        <div>
          <p className="username">
            {" "}
            <span>name :</span> {profile.authorName}
          </p>
        </div>
      </div>
      <div className="card_post">
        <h1>Posts</h1>
        <Box component="div" className="card">
          <Link className="link" to={`/blog/${profile.id}`}>
            <Box
              component="img"
              className="cover"
              src={profile.cover}
              alt="cover"
            />
          </Link>
          <Box component="p" className="chip">
            {profile.category}
          </Box>
          <Link className="link" to={`/blog/${profile.id}`}>
            <Box component="h3">{profile.title}</Box>
          </Link>

          <Box component="p" className="description">
            {profile.description}
          </Box>
        </Box>
      </div>
    </div>
  );
}
