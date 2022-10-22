import React, { FC } from "react";

import IComment from "../../models/commentTypes";
import styles from "./Comment.module.scss";

interface CommentProps {
  customClass?: string;
  comment: IComment;
}

export const Comment: FC<CommentProps> = ({ customClass, comment }) => {
  return (
    <li className={`${styles.comment} ${customClass}`}>
      <p>
        <b>{comment.email}</b>: {comment.name}
      </p>
      <p>
        <i>{comment.body}</i>
      </p>
    </li>
  );
};
