import React, { useState } from "react";

function joke() {
  let [author, setAuthor] = useState("John Doe");
  let [content, setContent] = useState("React is a JS library for UI");
  let [likes, setLikes] = useState(25);

  return (
    <div>
      <h1>Post</h1>
      <h2>Author: {author}</h2>
      <h2>Content: {content}</h2>
      <h2>Likes: {likes}</h2>
    </div>
  );
}

export default joke;