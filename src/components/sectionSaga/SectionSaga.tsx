import React, { ChangeEvent, FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchPosts, setLimit } from "../../store/slices/postsSlice";
import { Album } from "../album/Album";
import { Container } from "../container/Container";
import { ListData } from "../listData/ListData";
import { User } from "../user/User";
import { Post } from "../post/Post";
import styles from "./SectionSaga.module.scss";
import { AnimateTitle } from "../animateTitle/AnimateTitle";
import { fetchAlbums, nextPage } from "../../store/slices/albumsSlice";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { SectionUnderTitle } from "../sectionUnderTitle/SectionUnderTitle";

export const SectionSaga: FC = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);
  const albums = useAppSelector((state) => state.albums.albums);
  const users = useAppSelector((state) => state.users.users);
  const albumsPage = useAppSelector((state) => state.albums.page);

  const limitChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      dispatch(fetchPosts());
      return;
    }
    dispatch(setLimit(e.target.value));
    dispatch(fetchPosts());
  };

  const onAlbumsMore = () => {
    dispatch(nextPage());
    dispatch(fetchAlbums());
  };

  return (
    <section className={styles.saga}>
      <Container>
        <SectionTitle>
          Posts &amp;&amp;&nbsp;albums &amp;&amp;&nbsp;users
        </SectionTitle>
        <SectionUnderTitle>
          We&nbsp;receive posts and albums and users using an&nbsp;asynchronous
          request via the redux-saga middleware
        </SectionUnderTitle>
        <label className={styles.saga__label} htmlFor="limit">
          You can set a limit for request of posts:
          <input
            className={styles.saga__limit}
            type="text"
            name="limit"
            placeholder="max limit"
            onChange={limitChange}
          />
        </label>
        <ListData customClass={styles.saga__listData}>
          <AnimateTitle chars="7ch">Posts:</AnimateTitle>
          {posts &&
            posts.map((post) => (
              <Post post={post} key={post.id} customClass={styles.saga__item} />
            ))}
        </ListData>
        <ListData customClass={styles.saga__listData}>
          <AnimateTitle chars="8ch">Albums:</AnimateTitle>
          {albums &&
            albums.map((album) => (
              <Album
                album={album}
                key={album.id}
                customClass={styles.saga__album}
              />
            ))}
          <div className={styles.saga__button}>
            <button
              className={styles["saga__button-more"]}
              type="button"
              onClick={onAlbumsMore}
              disabled={albumsPage === "10"}
            >
              Download more...
            </button>
          </div>
        </ListData>
        <ListData customClass={styles.saga__listData}>
          <AnimateTitle chars="7ch">Users:</AnimateTitle>
          {users && users.map((user) => <User user={user} key={user.id} />)}
        </ListData>
      </Container>
    </section>
  );
};
