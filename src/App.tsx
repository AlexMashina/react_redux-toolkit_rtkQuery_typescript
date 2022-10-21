import React, { useEffect } from "react";

import { Header } from "./components/header/Header";
import { SectionQuery } from "./components/sectionQuery/SectionQuery";
import { SectionSaga } from "./components/sectionSaga/SectionSaga";
import { useAppDispatch } from "./hooks/hooks";
import { fetchAlbums } from "./store/slices/albumsSlice";
import { fetchPosts } from "./store/slices/postsSlice";
import { fetchUsers } from "./store/slices/usersSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchAlbums());
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <SectionSaga />
      <SectionQuery />
    </div>
  );
}

export default App;
