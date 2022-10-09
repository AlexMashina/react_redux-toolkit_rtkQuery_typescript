import { put, call, takeLeading } from "redux-saga/effects";

import Album from "../models/albumTypes";
import { setAlbums } from "../store/slices/albumsSlice";

const fetchAlbums = (): Promise<Album[]> => {
  return fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
    res.json()
  );
};

function* albumsWorker() {
  const albums: Album[] = yield call(fetchAlbums);
  yield put(setAlbums(albums));
}

export function* albumsWatcher() {
  yield takeLeading("fetchAlbums", albumsWorker);
}
