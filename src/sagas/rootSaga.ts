import { all } from "redux-saga/effects";
import { usersWatcher } from "./usersSaga";
import { postsWatcher } from "./postsSaga";
import { albumsWatcher } from "./albumsSaga";

export default function* rootSaga() {
  yield all([usersWatcher(), postsWatcher(), albumsWatcher()]);
}
