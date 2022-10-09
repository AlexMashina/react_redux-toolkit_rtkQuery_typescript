// src/store/user.js
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

import User from "../../models/userTypes";

interface UsersSliceTypes {
  users: Array<User>;
}

// state
const initialState: UsersSliceTypes = {
  users: [],
};

// reducer откликается на созданные роутинами actions
const userSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<User[]>) => {
      state.users = payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const fetchUsers = createAction("fetchUsers");

export default userSlice.reducer;
