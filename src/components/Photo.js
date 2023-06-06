import React from "react";

const Photo = ({src, alt}) => {

    return (
      <li>
        <img
          src={src}
          alt={alt}
        />
      </li>
    );

}

export default Photo