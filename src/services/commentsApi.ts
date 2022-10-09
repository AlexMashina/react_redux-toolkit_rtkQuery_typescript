import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import IComment from "../models/commentTypes";

export const commentsApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getComments: build.query<IComment[], string>({
      query: (limit = "") => ({
        url: `/comments?${limit && `_limit=${limit}`}`,
      }),
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
