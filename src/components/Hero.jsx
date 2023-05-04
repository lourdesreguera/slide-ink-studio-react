import { useDispatch } from "react-redux";

// redux
import { showMore } from "../redux/homeMore/more.actions";

const Hero = () => {
  const dispatch = useDispatch();

  const scrollToSection = () => dispatch(showMore());

  return (
    <div className="b-hero" id="home">
      <div className="b-hero__headings">
        <h1 className="text text--heading b-hero__heading">Slide Ink Studio</h1>
        <h2 className="text text--subheading">
          Tattoo Studio based in Granada
        </h2>
      </div>
      <div className="b-hero__btn">
        <img className="btn" src="./moreBtn.png" alt="moreButton" onClick={scrollToSection} />
      </div>
    </div>
  );
};

export default Hero;
