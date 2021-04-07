import Particles from "react-particles-js";
import "./ParticlesBG.css";

export default function ParticlesBG() {
  return (
    <Particles
      className="ParticlesBG"
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.05,
          },
          move: {
            direction: "right",
            speed: 0.15,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
