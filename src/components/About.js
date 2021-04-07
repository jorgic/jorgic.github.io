import "./About.css";
import HomeButton from "./HomeButton";
import ParticlesBG from "./ParticlesBG";
import Skills from "./Skills";
import Translate from "../languages/Translate";

export default function About() {
  return (
    <div className="About">
      <div className="about-side animate__animated animate__bounceInLeft">
        <h1>
          <Translate string={"aboutMe"} />
        </h1>
        <div className="title-line"></div>
        <div className="bio">
          <p>Yo! 👋</p>
          <p>
            <Translate string={"mainInfo"} />
          </p>
          <p>
            <Translate string={"nextInfo"} />
          </p>
        </div>
        <Skills />
      </div>
      <div className="right-side">
        <p className="quote animate__animated animate__bounceInRight">
          <Translate string={"quote"} />
        </p>
      </div>
      <ParticlesBG />
      <HomeButton />
    </div>
  );
}
