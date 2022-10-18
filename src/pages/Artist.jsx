import React from "react";
import { Link, useParams } from "react-router-dom";
import artists from "../artists";
import About from "../components/About";
import { useEffect } from "react";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Artist = () => {
  const { name } = useParams();
  const artist = artists.find((artist) => artist.name === name);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="b-artistDetails">
      <div className="opening opening--top"></div>
      <div className="b-artistDetails__return">
        <Link to='/'>
          <img src="./images/icon-arrow.svg" alt="Icono de flecha" />
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${artist.image})` }}
        className="b-artistDetails__hero"
      >
        <h1 className="text text--nick tracking-in-contract">{artist.nick}</h1>
      </div>
      <About artist={artist} />
      <Gallery />
      <Footer />
      <div className="opening opening--bottom"></div>
    </div>
  );
};

export default Artist;
