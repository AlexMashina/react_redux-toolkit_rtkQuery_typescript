import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import ITodo from "../models/todoTypes";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchTodos: build.query<ITodo[], any>({
      query: (page: string = "1") => `/todos?_page=${page}`,
    }),
  }),
});

export const { useFetchTodosQuery } = todosApi;
