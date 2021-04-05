import "./Home.css";
import "animate.css";

import Link from "react-router-dom/Link";
import { FaUser } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import Title from "./Title";
import Github from "./Github";
import Languages from "./Languages";
import CVButton from "./CVButton";
import gif from "../assets/main.gif";

export default function Home() {
  return (
    <>
      <Github />
      <Languages />
      <div className="Home">
        <div className="wrapper">
          <Title />
          <img id="title" className="gif" src={gif} alt="Gif!" />
          <CVButton />
          <div className="left-buttons animate__animated animate__backInLeft">
            <Link to="/about" className="link-btn">
              <FaUser size={24} className="icon" />
              About Me
            </Link>
            <Link to="/projects" className="link-btn">
              <FiCode size={24} className="icon" />
              My Projects
            </Link>
          </div>
          <div className="right-buttons animate__animated animate__backInRight ">
            <a href="#" className="link-btn">
              <FaPlay size={24} className="icon" />
              Play Music
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
