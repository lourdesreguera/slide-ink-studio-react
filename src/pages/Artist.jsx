import React from "react";
import { useParams } from "react-router-dom";
import artists from "../artists";

const Artist = () => {
  const { name } = useParams();
  const artist = artists.find((artist) => artist.name === name);

  return (
    <div>
      <div className="open"></div>
      <img src={artist.image} alt={artist.name} />
      <h1>{artist.name}</h1>
      <div className="close"></div>
    </div>
  );
};

export default Artist;
