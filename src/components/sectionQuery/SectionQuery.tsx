import React, { FC } from "react";

import { Container } from "../container/Container";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { SectionUnderTitle } from "../sectionUnderTitle/SectionUnderTitle";
import { ListData } from "../listData/ListData";
import styles from "./SectionQuery.module.scss";
import { AnimateTitle } from "../animateTitle/AnimateTitle";
import { useGetCommentsQuery } from "../../services/commentsApi";
import { useFetchPhotosQuery } from "../../services/photosApi";
import { useFetchTodosQuery } from "../../services/todosApi";
import { Comment } from "../comment/Comment";
import { Photo } from "../photo/Photo";
import { Todo } from "../todo/Todo";

export const SectionQuery: FC = () => {
  const { data: comments, error: errorComments } = useGetCommentsQuery("10");
  const { data: photos, error: errorPhotos } = useFetchPhotosQuery("1");
  const { data: todos, error: errorTodos } = useFetchTodosQuery("1");

  return (
    <section className={styles.query}>
      <Container>
        <SectionTitle>
          Comments &amp;&amp;&nbsp;todos &amp;&amp;&nbsp;photos
        </SectionTitle>
        <SectionUnderTitle>
          We&nbsp;get the data below using RTK(QUERY)
        </SectionUnderTitle>
        <ListData customClass={styles.query__listData}>
          <AnimateTitle chars={"10ch"}>Comments:</AnimateTitle>
          {comments &&
            comments.map((comment) => (
              <Comment
                comment={comment}
                customClass={styles.query__comment}
                key={comment.id}
              />
            ))}
        </ListData>
        <ListData customClass={styles.query__listData}>
          <AnimateTitle chars={"8ch"}>Photos:</AnimateTitle>
          <div className={styles["query__listData-photo"]}>
            {photos &&
              photos.map((photo) => (
                <Photo
                  photo={photo}
                  customClass={styles.query__photo}
                  key={photo.id}
                />
              ))}
          </div>
        </ListData>
        <ListData customClass={styles.query__listData}>
          <AnimateTitle chars={"7ch"}>Todos:</AnimateTitle>
          {todos &&
            todos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                customClass={styles.query__todo}
              />
            ))}
        </ListData>
      </Container>
    </section>
  );
};
