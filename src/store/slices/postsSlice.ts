import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

import IPost from "../../models/postTypes";

interface PostsSlice {
  posts: IPost[];
  limit: string;
}

const initialState: PostsSlice = {
  posts: [],
  limit: "5",
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts: (state, { payload }: PayloadAction<IPost[]>) => {
      state.posts = payload;
    },
    setLimit: (state, { payload }: PayloadAction<string>) => {
      state.limit = payload;
    },
  },
});

export const { setPosts, setLimit } = postsSlice.actions;

export const fetchPosts = createAction("fetchPosts");

export default postsSlice.reducer;
