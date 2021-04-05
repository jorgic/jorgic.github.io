import "./Home.css";

import Link from "react-router-dom/Link";

import Title from "./Title";
import Github from "./Github";
import gif from "../assets/main.gif";

export default function Home() {
  return (
    <>
      <Github />
      <div className="Home">
        <div className="wrapper">
          <Title />
          <img className="gif" src={gif} alt="Gif!" />
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </>
  );
}
