import { useEffect } from "react";
import { useSelector } from "react-redux";
import Scroll from "react-scroll";

// custom
import Artists from "../components/Artists";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  const { isMoreShown } = useSelector((state) => state.more);

  useEffect(() => {
    const scroller = Scroll.scroller;

    scroller.scrollTo("artists", {
      smooth: true,
      duration: 600,
    });
  }, [isMoreShown]);

  return (
    <div>
      <Header />
      <Hero />
      {isMoreShown && (
        <>
          <Artists />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
