import { PayloadAction, createSlice, createAction } from "@reduxjs/toolkit";

import IAlbum from "../../models/albumTypes";

interface AlbumsSlice {
  albums: IAlbum[];
  page: string;
}

const initialState: AlbumsSlice = {
  albums: [],
  page: "1",
};

const albumsSlice = createSlice({
  name: "albumsSlice",
  initialState,
  reducers: {
    setAlbums: (state, { payload }: PayloadAction<IAlbum[]>) => {
      state.albums = [...state.albums, ...payload];
    },
    nextPage: (state) => {
      state.page = String(parseInt(state.page) + 1);
    },
  },
});

export const { setAlbums, nextPage } = albumsSlice.actions;

export const fetchAlbums = createAction("fetchAlbums");

export default albumsSlice.reducer;
