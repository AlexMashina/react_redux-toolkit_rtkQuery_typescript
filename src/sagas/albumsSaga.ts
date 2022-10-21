import { put, call, takeLeading, select } from "redux-saga/effects";

import { RootState } from "../store";
import IAlbum from "../models/albumTypes";
import { setAlbums } from "../store/slices/albumsSlice";

const fetchAlbums = (page: string = "1"): Promise<IAlbum[]> => {
  return fetch(
    `https://jsonplaceholder.typicode.com/albums?_page=${page}`
  ).then((res) => res.json());
};

function* albumsWorker() {
  const page: string = yield select((state: RootState) => state.albums.page);
  const albums: IAlbum[] = yield call(fetchAlbums, page);
  yield put(setAlbums(albums));
}

export function* albumsWatcher() {
  yield takeLeading("fetchAlbums", albumsWorker);
}
