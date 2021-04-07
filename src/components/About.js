import "./About.css";
import HomeButton from "./HomeButton";
import ParticlesBG from "./ParticlesBG";

export default function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <div className="title-line"></div>
      <ParticlesBG />
      <HomeButton />
    </div>
  );
}
