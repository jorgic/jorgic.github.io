import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeButton from "./HomeButton";
import { FaPlay } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import musician from "../assets/musician.png";

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
        <div className="project mobile">
          <div className="project-info">
            <h1>MUSICIAN - GUESS THE SONG</h1>
            <div className="title-line project-line"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              rhoncus mi varius sapien laoreet consequat. Sed rhoncus in diam
              vel interdum. Donec eleifend dapibus consequat. Cras cursus sit
              amet purus sit amet placerat.
            </p>
            <div className="project-buttons">
              <a className="link-btn">
                <FaPlay />
                Demo
              </a>
              <a className="link-btn">
                <FiCode />
                Code
              </a>
            </div>
          </div>
          <div className="project-picture">
            <img className="device" src={musician} />
          </div>
        </div>
        <div className="project">
          <h3>2</h3>
        </div>
      </Slider>
      <HomeButton />
    </div>
  );
}
