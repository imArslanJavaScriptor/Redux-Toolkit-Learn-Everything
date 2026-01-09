import React from "react";
import { fetchPhotos } from "./api/mediaApi";

const App = () => {
  return <div>
    <button onClick={() => fetchPhotos("book")}>Fetch Photos</button>
  </div>;
};

export default App;
    