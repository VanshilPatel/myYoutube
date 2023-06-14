import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex">
      <img
        className="h-8 w-8"
        alt="user"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      ></img>
      <p>{name}</p>
      <h1>{text}</h1>
      
    </div>
  );
};

export default Comment;
