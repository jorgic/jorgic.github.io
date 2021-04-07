import "./About.css";
import HomeButton from "./HomeButton";
import ParticlesBG from "./ParticlesBG";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="About">
      <div className="about-side ">
        <h1>About Me</h1>
        <div className="title-line"></div>
        <p className="bio">
          Yo!
          <br />
          <br /> My name is <strong>Radovan Jorgić</strong>. I am currently
          living and studying in Ravne na Koroškem, Slovenia. <br />
          <br />
          From very young age I've shown passion about technology. I've been
          programming for three years now and my love for it grows every day.
          Aside of programming, I like football, futsal, music and a couple of
          beers with friends.
        </p>
        <Skills />
      </div>
      <div className="right-side">
        <p className="quote ">
          “If you're the smartest person in the room, you're in the wrong room."
        </p>
      </div>
      <ParticlesBG />
      <HomeButton />
    </div>
  );
}
