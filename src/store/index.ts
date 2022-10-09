import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import usersSlice from "./slices/usersSlice";
import postsSlice from "./slices/postsSlice";
import albumsSlice from "./slices/albumsSlice";
import { commentsApi } from "../services/commentsApi";
import { photosApi } from "../services/photosApi";
import { todosApi } from "../services/todosApi";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  posts: postsSlice,
  users: usersSlice,
  albums: albumsSlice,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [photosApi.reducerPath]: photosApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sagaMiddleware,
      commentsApi.middleware,
      photosApi.middleware,
      todosApi.middleware
    ),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
