import React from "react";

const Post = ({ allpost }) => {
  return (
    <div className="main">
      {allpost.map((item) => (
        <div className="item">
          <h3>{item.id}</h3>
          <h5>{item.title}</h5>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
