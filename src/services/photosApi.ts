import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import IPhoto from "../models/photoTypes";

export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchPhotos: build.query<IPhoto[], any>({
      query: () => "/photos",
    }),
  }),
});

export const { useFetchPhotosQuery } = photosApi;
