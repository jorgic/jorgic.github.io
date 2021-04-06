import "./About.css";

import DevIcons from "./DevIcons";
import HomeButton from "./HomeButton";
import ParticlesBG from "./ParticlesBG";

export default function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <div className="title-line"></div>
      <div className="main">
        <div className="about">
          <p>
            Highly self-motivated web & mobile developer passionate about
            learning the latest and greatest technologies with a flair for
            creating elegant solutions in the least amount of time. Enjoy
            creating sleek, innovative and reponsive, user-friendly
            applications. Team player with good communication skills but also
            productive when self-driven.
          </p>
          <div className="quote">
            “If you’re the smartest person in the room, you’re in the wrong
            room.”
          </div>
        </div>
        <div></div>
        <div className="other">
          <section className="experience">
            <h3>Experience</h3>
            <div className="title-line"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              viverra aliquam diam sit amet pretium. Nulla rutrum sollicitudin
              nibh, et aliquet urna.
            </p>
            <ul>
              <li>
                <strong>Salesperson (Telemach Slovenia)</strong>
              </li>
              <li>
                <strong>Freelance Web Developer</strong>
              </li>
            </ul>
          </section>
          <section className="skills">
            <h3>Skills</h3>
            <div className="title-line"></div>
            <DevIcons />
            <HomeButton />
          </section>
        </div>
      </div>
    </div>
  );
}
