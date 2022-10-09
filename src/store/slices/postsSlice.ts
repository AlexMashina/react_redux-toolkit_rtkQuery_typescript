import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

import Post from "../../models/postTypes";

interface PostsSlice {
  posts: Post[];
}

const initialState: PostsSlice = {
  posts: [],
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts: (state, { payload }: PayloadAction<Post[]>) => {
      state.posts = payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export const fetchPosts = createAction("fetchPosts");

export default postsSlice.reducer;
