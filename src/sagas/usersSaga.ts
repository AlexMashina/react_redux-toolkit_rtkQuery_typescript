import { put, takeLatest, call } from "redux-saga/effects";

import { setUsers } from "../store/slices/usersSlice";

import IUser from "../models/userTypes";

const fetchUsers = (): Promise<IUser[]> => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};

function* usersWorker() {
  const data: IUser[] = yield call(fetchUsers);
  yield put(setUsers(data));
}

export function* usersWatcher() {
  yield takeLatest("fetchUsers", usersWorker);
}
