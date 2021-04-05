import { useState } from "react";
import ReactiveButton from "reactive-button";
import "./Home.css";

import Link from "react-router-dom/Link";
import { IconContext } from "react-icons";

import Title from "./Title";
import Github from "./Github";
import Languages from "./Languages";
import gif from "../assets/main.gif";
import cv from "../assets/cv.pdf";

export default function Home() {
  const [state, setState] = useState("idle");

  const handleDownload = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
      window.open(cv);
    }, 2000);
  };

  return (
    <>
      <Github />
      <Languages />
      <div className="Home">
        <div className="wrapper">
          <Title />
          <img id="title" className="gif" src={gif} alt="Gif!" />
          <a href="#" className="cv-download">
            <ReactiveButton
              buttonState={state}
              onClick={handleDownload}
              color={"teal"}
              idleText={"⤓ Download CV"}
            />
          </a>
        </div>
      </div>
    </>
  );
}
