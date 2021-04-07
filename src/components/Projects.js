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
import Translate from "../languages/Translate";

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
      <h1>
        <Translate string={"myProjects"} />
      </h1>
      <div className="title-line"></div>
      <Slider {...settings} className="slider">
        <Project
          title={<Translate string={"musician"} />}
          description={<Translate string={"musicianDesc"} />}
          image={musician}
          demo={
            "https://play.google.com/store/apps/details?id=com.jorga.muzikant&hl=en&gl=US"
          }
          code={"https://github.com/jorgadev/muzikant.io"}
        />
        <Project
          title={<Translate string={"weatherChamber"} />}
          description={<Translate string={"weatherChamberDesc"} />}
          image={wc}
          demo={"https://weather-chamber.netlify.app/"}
          code={"https://github.com/jorgadev/weather-chamber"}
        />
        <Project
          title={"NUMBERZEN"}
          description={<Translate string={"numberzenDesc"} />}
          image={numberzen}
          demo={"https://numberzen.netlify.app/prime-number"}
          code={"https://github.com/jorgadev/numberzen"}
        />
        <Project
          title={"CODETEAMS"}
          description={<Translate string={"codeTeamsDesc"} />}
          image={codeteams}
          demo={"http://code-teams.herokuapp.com/"}
          code={"https://github.com/jorgadev/codehub"}
        />
      </Slider>
      <HomeButton />
      <ParticlesBG />
    </div>
  );
}
