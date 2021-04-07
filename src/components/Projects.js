import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeButton from "./HomeButton";
import Project from "./Project";
import ParticlesBG from "./ParticlesBG";
import musician from "../assets/musician.png";
import wc from "../assets/wc.png";
import numberzen from "../assets/numberzen.png";
import codeteams from "../assets/codeteams.png";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };

  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="title-line"></div>
      <Slider {...settings} className="slider">
        <Project
          title={"MUSICIAN - GUESS THE SONG"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          mi varius sapien laoreet consequat. Sed rhoncus in diam vel interdum.
          Donec eleifend dapibus consequat. Cras cursus sit amet purus sit amet
          placerat.`}
          image={musician}
        />
        <Project
          title={"WEATHER CHAMBER"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          mi varius sapien laoreet consequat. Sed rhoncus in diam vel interdum.
          Donec eleifend dapibus consequat. Cras cursus sit amet purus sit amet
          placerat.`}
          image={wc}
        />
        <Project
          title={"NUMBERZEN"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          mi varius sapien laoreet consequat. Sed rhoncus in diam vel interdum.
          Donec eleifend dapibus consequat. Cras cursus sit amet purus sit amet
          placerat.`}
          image={numberzen}
        />
        <Project
          title={"CODETEAMS"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
          mi varius sapien laoreet consequat. Sed rhoncus in diam vel interdum.
          Donec eleifend dapibus consequat. Cras cursus sit amet purus sit amet
          placerat.`}
          image={codeteams}
        />
      </Slider>
      <HomeButton />
      <ParticlesBG />
    </div>
  );
}
