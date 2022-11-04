import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="./images/pichardo.png"
    onDragStart={handleDragStart}
    alt="Tatuaje"
  />,
  <img
    src="./images/pichardo.png"
    onDragStart={handleDragStart}
    alt="Tatuaje"
  />,
  <img
    src="./images/pichardo.png"
    onDragStart={handleDragStart}
    alt="Tatuaje"
  />,
  <img
    src="./images/pichardo.png"
    onDragStart={handleDragStart}
    alt="Tatuaje"
  />,
  <img
    src="./images/pichardo.png"
    onDragStart={handleDragStart}
    alt="Tatuaje"
  />,
  <img
    src="./images/pichardo.png"
    onDragStart={handleDragStart}
    alt="Tatuaje"
  />,
];

const responsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2
  },
  1024: {
    items: 3,
  },
};

const Gallery = () => {
  return (
    <div className="b-gallery">
      <h2 className="text text--section">Trabajos</h2>
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        responsive={responsive}
        autoPlay
        infinite
        autoPlayInterval={2000}
        animationDuration={1000}
      />
    </div>
  );
};

export default Gallery;
