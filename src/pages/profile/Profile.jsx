import React, { useContext } from "react";
import { blogList } from "../../config/data.js";
import { AppContext } from "../../context/AppContext.jsx";

export default function Profile() {
  const { id } = useContext(AppContext);
  console.log(id);

  // Finding the profile with the matching id
  const profile = blogList.find((profile) => profile.id === id);

  // Handling the case when the profile is not found
  if (!profile) {
    return <div>No data found for this ID.</div>;
  }

  // Rendering the profile data
  return (
    <div>
      <p>{profile.authorName}</p>
      {/* Render other profile data here */}
    </div>
  );
}
