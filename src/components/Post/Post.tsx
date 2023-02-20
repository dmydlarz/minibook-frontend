import React from "react";
import { IPost } from "../../interfaces/IPost";

const Post = (props: IPost) => {
  const { text, time, title, author } = props;
  return (
    <div className="post">
      <span className={"title"}>
        {title} <span className={"author"}>{author}</span>
      </span>
      <div className={"text"}>{text}</div>
      <div className={"time"}>{time} mins ago</div>
    </div>
  );
};

export default Post;
