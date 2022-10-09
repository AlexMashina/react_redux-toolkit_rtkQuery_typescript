import { PayloadAction, createSlice, createAction } from "@reduxjs/toolkit";

import Album from "../../models/albumTypes";

interface AlbumsSlice {
  albums: Album[];
}

const initialState: AlbumsSlice = {
  albums: [],
};

const albumsSlice = createSlice({
  name: "albumsSlice",
  initialState,
  reducers: {
    setAlbums: (state, { payload }: PayloadAction<Album[]>) => {
      state.albums = payload;
    },
  },
});

export const { setAlbums } = albumsSlice.actions;

export const fetchAlbums = createAction("fetchAlbums");

export default albumsSlice.reducer;
