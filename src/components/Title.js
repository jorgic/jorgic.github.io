import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Title() {
  return (
    <ReactTypingEffect
      text={["Hello, I am jorgadev..", "Want to see my projects?"]}
      className="title"
      speed={100}
      eraseSpeed={100}
      eraseDelay={500}
      typingDelay={1000}
      displayTextRenderer={(text, i) => {
        return (
          <p>
            {text.split("").map((char, j) => {
              return (
                <span
                  key={j}
                  style={
                    i === 0 && j > 11 && j < 20 ? { fontWeight: "bold" } : {}
                  }
                >
                  {char}
                </span>
              );
            })}
          </p>
        );
      }}
    />
  );
}
