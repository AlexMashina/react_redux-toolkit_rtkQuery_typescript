import { put, takeEvery, call } from "redux-saga/effects";

import Post from "../models/postTypes";
import { setPosts } from "../store/slices/postsSlice";

const fetchPosts = (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

function* postsWorker() {
  const posts: Post[] = yield call(fetchPosts);
  yield put(setPosts(posts));
}

export function* postsWatcher() {
  yield takeEvery("fetchPosts", postsWorker);
}
