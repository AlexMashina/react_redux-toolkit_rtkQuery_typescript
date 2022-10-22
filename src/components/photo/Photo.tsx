import React, { FC } from "react";

import IPhoto from "../../models/photoTypes";
import styles from "./Photo.module.scss";

interface PhotoProps {
  customClass?: string;
  photo: IPhoto;
}

export const Photo: FC<PhotoProps> = ({ customClass, photo }) => {
  return (
    <li className={`${styles.photo} ${customClass}`}>
      <img
        className={styles.photo__image}
        src={photo.url}
        alt={photo.title}
        loading="lazy"
      />
    </li>
  );
};
