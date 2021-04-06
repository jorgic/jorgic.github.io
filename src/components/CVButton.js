import { useState } from "react";
import ReactiveButton from "reactive-button";

import cv from "../assets/cv.pdf";

export default function CVButton() {
  const [state, setState] = useState("idle");

  const handleDownload = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
      window.open(cv);
    }, 2000);
  };

  return (
    <ReactiveButton
      buttonState={state}
      onClick={handleDownload}
      color={"teal"}
      idleText={"Download CV"}
      style={{ fontSize: 16, padding: "10px 20px", zIndex: "1" }}
    />
  );
}
