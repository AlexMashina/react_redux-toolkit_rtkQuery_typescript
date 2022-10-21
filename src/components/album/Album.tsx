import React, { FC } from "react";

import styles from "./Album.module.scss";
import IAlbum from "../../models/albumTypes";

interface AlbumProps {
  customClass?: string;
  album: IAlbum;
}

export const Album: FC<AlbumProps> = ({ album, customClass }) => {
  return (
    <li className={`${styles.album} ${customClass}`}>
      <table className={styles.album__table}>
        <tr className={styles["album__table-row"]}>
          <th className={styles["album__table-column"]}>UserId</th>
          <th className={styles["album__table-column"]}>Title of album</th>
        </tr>
        <tr className={styles["album__table-row"]}>
          <td className={styles["album__table-column"]}>{album.userId}</td>
          <td className={styles["album__table-column"]}>{album.title}</td>
        </tr>
        <tr></tr>
      </table>
    </li>
  );
};
