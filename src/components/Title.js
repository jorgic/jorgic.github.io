import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Title({ language }) {
  let textArray = [];
  if (language === "en") {
    textArray = ["Hi, I am Jorga.", "Welcome to my portfolio website!"];
  } else if (language === "sl") {
    textArray = ["Zdravo, sem Jorga.", "Dobrodošli na moj portfolio!"];
  } else if (language === "rs") {
    textArray = ["Zdravo, ja sam Jorga.", "Dobrodošli na moj portfolio!"];
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
