import "./About.css";
import Translate from "../languages/Translate";

export default function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <div className="title-line"></div>
      <div className="main">
        <div className="about">
          <Translate string={"hello"} />
          <p>
            Highly self-motivated web & mobile developer passionate about
            learning the latest and greatest technologies with a flair for
            creating elegant solutions in the least amount of time. Enjoy
            creating sleek, innovative and reponsive, user-friendly
            applications. Team player with good communication skills but also
            productive when self-driven.
          </p>
        </div>
        <div className="other"></div>
      </div>
    </div>
  );
}
