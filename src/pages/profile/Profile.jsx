import React, { useContext } from "react";
import { blogList } from "../../config/data.js";
import { AppContext } from "../../context/AppContext.jsx";

export default function Profile() {
  const { id } = useContext(AppContext);
  console.log(id);

  const profile = blogList.find((profile) => profile.id === id);

  if (!profile) {
    return <div>No data found for this ID.</div>;
  }

  return (
    <div>
      <img src={profile.authorAvatar} alt="pic user" />
      <p> name: {profile.authorName}</p>
    </div>
  );
}
