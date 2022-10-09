import { put, call, takeLeading } from "redux-saga/effects";

import IAlbum from "../models/albumTypes";
import { setAlbums } from "../store/slices/albumsSlice";

const fetchAlbums = (): Promise<IAlbum[]> => {
  return fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
    res.json()
  );
};

function* albumsWorker() {
  const albums: IAlbum[] = yield call(fetchAlbums);
  yield put(setAlbums(albums));
}

export function* albumsWatcher() {
  yield takeLeading("fetchAlbums", albumsWorker);
}
