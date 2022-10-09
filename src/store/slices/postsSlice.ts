import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

import IPost from "../../models/postTypes";

interface PostsSlice {
  posts: IPost[];
}

const initialState: PostsSlice = {
  posts: [],
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts: (state, { payload }: PayloadAction<IPost[]>) => {
      state.posts = payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export const fetchPosts = createAction("fetchPosts");

export default postsSlice.reducer;
