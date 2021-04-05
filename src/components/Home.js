import "./Home.css";

import Link from "react-router-dom/Link";
import { IconContext } from "react-icons";

import Title from "./Title";
import Github from "./Github";
import Languages from "./Languages";
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
          <a href="#" className="cv-download">
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
