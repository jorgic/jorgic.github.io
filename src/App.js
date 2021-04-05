import React from "react";
import "./App.css";

import ReactTypingEffect from "react-typing-effect";
import GithubCorner from "react-github-corner";

import gif from "./assets/main.gif";

function App() {
  return (
    <>
      <GithubCorner
        href="https://github.com/jorgadev"
        octoColor="#a891b7"
        bannerColor="white"
        target="_blank"
      />
      <div className="App">
        <div className="wrapper">
          <ReactTypingEffect
            text={["Hello, I am jorgadev!", "Want to see my projects?"]}
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
                          i === 0 && j > 11 && j < 20
                            ? { fontWeight: "bold" }
                            : {}
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
          <img className="gif" src={gif} alt="Gif!" />
        </div>
      </div>
    </>
  );
}

export default App;
