import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";

import apiKey from "./config";
function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Sunset");

  useEffect(() => {
    setLoading(true);
    let activeSearch = true;
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&safe_search=2&content_type=1&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (activeSearch) {
          setPhotos(response.data.photos);
          setLoading(false);
        }
      })
      .catch( err => {
        console.error('There was an issue parsing the data...', err);
      });

    return () => {activeSearch = false};
  }, [query]);

  const changeQueryHandler = (inputText) => {
    setQuery(inputText);
  };

  return (
    <div>
      <Search />
      <Nav />
      {loading ? <h3>Loading...</h3> : <PhotoContainer data={photos} />}
    </div>
  );
}

export default App;
