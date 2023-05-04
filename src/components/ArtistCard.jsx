import { useState } from "react";
import { Link } from "react-router-dom";

// custom
import artists from "../artists";

const ArtistCard = () => {
  const [imageSize, setImageSize] = useState("");
  const [id, setId] = useState();

  const changeImage = (id) => {
    setId(id);
    setImageSize("big");
  };

  const changeImageSmall = () => {
    setImageSize("small");
  };

  return (
    <div className="b-artist__gallery">
      {artists.map((artist, key) => {
        return (
          <div key={key} className="b-artist">
            <h3 className="text text--artist">{artist.name}</h3>
            <div className="b-artist__container">
              <img
                key={key}
                src={artist.image}
                alt={artist.name}
                className={
                  id === key
                    ? "b-artist__image " + imageSize
                    : "b-artist__image"
                }
              />
            </div>
            <p className="b-artist__style">{artist.style}</p>
            <button
              className="btn btn--artist text text--btn"
              onMouseEnter={() => changeImage(key)}
              onMouseLeave={changeImageSmall}
            >
              <Link to={`/${artist.name}`} className="link text text--btn">
                Ver más
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistCard;
