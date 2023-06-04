import React from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";

import apiKey  from "./config";

function App() {
  return (
    <div>
      <Search />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
