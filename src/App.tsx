import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { fetchAlbums } from "./store/slices/albumsSlice";
import { fetchPosts } from "./store/slices/postsSlice";
import { fetchUsers } from "./store/slices/usersSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
    dispatch(fetchAlbums());
    console.log(fetchUsers());
    console.log(fetchPosts());
    console.log(fetchAlbums());
  }, [dispatch]);

  return <div className="App"></div>;
}

export default App;
