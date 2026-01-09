import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  return <div>
    <button onClick={() => fetchPhotos("")}>Fetch Photos</button>
    <button onClick={() => fetchVideos("")}>Fetch Videos</button>
  </div>;
};

export default App;
     