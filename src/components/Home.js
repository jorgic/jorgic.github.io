import { useState, useRef } from "react";
import "./Home.css";
import "animate.css";

import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Translate from "../languages/Translate";

import Title from "./Title";
import Github from "./Github";
import Languages from "./Languages";
import CVButton from "./CVButton";

import gif from "../assets/main.gif";
import music from "../assets/music.mp3";
import ParticlesBG from "./ParticlesBG";

export default function Home({ language, setLanguage }) {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef();

  const handleMusicPlay = () => {
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying((prev) => !prev);
  };

  return (
    <>
      <Github />
      <Languages language={language} setLanguage={setLanguage} />
      <div className="Home">
        <div className="wrapper">
          <Title language={language} />
          <img
            id="title"
            className="gif animate__animated animate__pulse"
            src={gif}
            alt="Gif!"
          />
          <CVButton language={language} />
          <div className="left-buttons animate__animated animate__backInLeft">
            <Link to="/about" className="link-btn">
              <FaUser size={24} className="icon" />
              <Translate string={"aboutMe"} />
            </Link>
            <Link to="/projects" className="link-btn">
              <FiCode size={24} className="icon" />
              <Translate string={"myProjects"} />
            </Link>
          </div>
          <div className="right-buttons animate__animated animate__backInRight">
            <p>
              <Translate string={"musicQuote"} />
            </p>
            <div
              className={`link-btn ${
                musicPlaying
                  ? "animate__animated animate__pulse animate__infinite"
                  : null
              }`}
              onClick={handleMusicPlay}
            >
              <audio ref={audioRef} id="player" loop>
                <source src={music} type="audio/mp3" />
              </audio>
              {!musicPlaying ? (
                <FaPlay size={24} className="icon" />
              ) : (
                <FaPause size={24} className="icon" />
              )}
              <Translate string={"playMusic"} />
            </div>
          </div>
        </div>
      </div>
      <ParticlesBG />
    </>
  );
}
