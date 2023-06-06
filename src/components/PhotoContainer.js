import React from "react";
import Photo from "./Photo";
import NoResults from "./NoResults";

let i = 0;

const PhotoContainer = ({data, term}) => {

    let resultArray = data.photo || [];
    console.log(resultArray, i);
    i++
    let photos;
    if (resultArray.length > 0) {
        photos = resultArray.map((photo) => (
          <Photo
            key={photo.id}
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
            alt={photo.title}
          />
        ));
    } else {
        photos = <NoResults />
    }
    return (
      <div className="photo-container">
        <h2>{`'${term}' Results`}</h2>
        <ul>{photos}</ul>
      </div>
    );
}

export default PhotoContainer;