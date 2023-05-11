const About = ({ artist }) => {
  return (
    <div className="b-about">
      <div className="b-about__name">
        <h2 className="text text--artist-name">{artist.name}</h2>
        <p>{artist.style}</p>
      </div>
      <div className="b-about__about">
        {artist.nick !== "Lucy" ? (
          <h3 className="text text--artist-about">Sobre él</h3>
        ) : (
          <h3 className="text text--artist-about">Sobre ella</h3>
        )}
        <p>{artist.description}</p>
      </div>
    </div>
  );
};

export default About;
