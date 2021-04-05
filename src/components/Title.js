import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Title() {
  return (
    <ReactTypingEffect
      text={["Hello, I am jorgadev.", "Let's chat!"]}
      className="title"
      speed={100}
      eraseSpeed={100}
      eraseDelay={500}
      typingDelay={1000}
    />
  );
}
