import React from "react";
import "./Project.css";
import { FaPlay } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import Translate from "../languages/Translate";
import "animate.css";

export default function Project({ title, description, image, demo, code }) {
  return (
    <div className="Project">
      <div className="project-info animate__animated animate__backInDown">
        <div>
          <h1>{title}</h1>
          <div className="title-line project-line"></div>
          <p>{description}</p>
          <div className="project-buttons">
            <a className="link-btn" href={demo} target="_blank">
              <FaPlay />
              Demo
            </a>
            <a className="link-btn" href={code} target="_blank">
              <FiCode />
              <Translate string={"code"} />
            </a>
          </div>
        </div>
      </div>
      <div className="project-picture animate__animated animate__backInUp">
        <img className="device" src={image} />
      </div>
    </div>
  );
}
