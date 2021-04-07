import React from "react";
import "./Project.css";
import { FaPlay } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import "animate.css";

export default function Project({ title, description, image }) {
  return (
    <div className="Project">
      <div className="project-info animate__animated animate__backInDown">
        <div>
          <h1>{title}</h1>
          <div className="title-line project-line"></div>
          <p>{description}</p>
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
      </div>
      <div className="project-picture animate__animated animate__backInUp">
        <img className="device" src={image} />
      </div>
    </div>
  );
}
