import React, { FC } from "react";

import styles from "./Post.module.scss";
import IPost from "../../models/postTypes";

interface PostProps {
  customClass?: string;
  post: IPost;
}

export const Post: FC<PostProps> = ({ post, customClass }) => {
  return (
    <li className={`${styles.post} ${customClass}`}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </li>
  );
};
