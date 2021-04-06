import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Title({ language }) {
  let textArray = [];
  if (language === "en") {
    textArray = ["Hi, I am jorgadev.", "This is my portfolio!"];
  } else if (language === "sl") {
    textArray = ["Zdravo, sem jorgadev.", "To je moj portfolio!"];
  } else if (language === "rs") {
    textArray = ["Zdravo, ja sam jorgadev.", "Ovo je moj portfolio!"];
  }

  return (
    <ReactTypingEffect
      text={textArray}
      className="title"
      speed={100}
      eraseSpeed={100}
      eraseDelay={500}
      typingDelay={1000}
    />
  );
}
