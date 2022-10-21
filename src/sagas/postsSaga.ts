import { put, takeEvery, call, select } from "redux-saga/effects";

import IPost from "../models/postTypes";
import { RootState } from "../store";
import { setPosts } from "../store/slices/postsSlice";

const fetchPosts = (limit: string): Promise<IPost[]> => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  ).then((res) => res.json());
};

function* postsWorker() {
  const limit: string = yield select((state: RootState) => state.posts.limit);
  const posts: IPost[] = yield call(fetchPosts, limit);
  yield put(setPosts(posts));
}

export function* postsWatcher() {
  yield takeEvery("fetchPosts", postsWorker);
}
