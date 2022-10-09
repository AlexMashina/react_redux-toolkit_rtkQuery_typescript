import { put, takeLatest, call } from "redux-saga/effects";

import { setUsers } from "../store/slices/usersSlice";

import User from "../models/userTypes";

const fetchUsers = (): Promise<User[]> => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};

function* usersWorker() {
  const data: User[] = yield call(fetchUsers);
  yield put(setUsers(data));
}

export function* usersWatcher() {
  yield takeLatest("fetchUsers", usersWorker);
}
