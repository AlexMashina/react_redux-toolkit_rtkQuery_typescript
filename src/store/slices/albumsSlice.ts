import { PayloadAction, createSlice, createAction } from "@reduxjs/toolkit";

import IAlbum from "../../models/albumTypes";

interface AlbumsSlice {
  albums: IAlbum[];
}

const initialState: AlbumsSlice = {
  albums: [],
};

const albumsSlice = createSlice({
  name: "albumsSlice",
  initialState,
  reducers: {
    setAlbums: (state, { payload }: PayloadAction<IAlbum[]>) => {
      state.albums = payload;
    },
  },
});

export const { setAlbums } = albumsSlice.actions;

export const fetchAlbums = createAction("fetchAlbums");

export default albumsSlice.reducer;
