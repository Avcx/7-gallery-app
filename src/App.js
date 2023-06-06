import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";

import apiKey from "./config";
import { useParams } from "react-router-dom";

function App() {
  let { term } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Sunset");

  useEffect(() => {
    console.log(term);
      if (term) {
        setQuery(term);
      }
  }, [term])

  useEffect(() => {
    setLoading(true);
    let activeSearch = true;
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&content_type=1&per_page=24&format=json&nojsoncallback=1`
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

  return (
    <div>
      <Search/>
      <Nav />
      {loading ? <h3>Loading...</h3> : <PhotoContainer data={photos} />}
    </div>
  );
}

export default App;
