import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import PhotoContainer from "./PhotoContainer";

import apiKey from "../config";

const ContentDisplay = () => {
  let { term } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Sunset");

  useEffect(() => {
    console.log(term);
    if (term) {
      setQuery(term);
    }
  }, [term]);

  useEffect(() => {
    setLoading(true);
    let activeSearch = true;
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (activeSearch) {
          setPhotos(response.data.photos.photo);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("There was an issue parsing the data...", err);
      });

    return () => {
      activeSearch = false;
    };
  }, [query]);

  return (
    <div id="content-display">{loading ? <h3>Loading...</h3> : <PhotoContainer data={photos} term={query} />}</div>
  );
};

export default ContentDisplay;
