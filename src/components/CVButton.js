import { useState } from "react";
import ReactiveButton from "reactive-button";

import cv from "../assets/cv.pdf";

export default function CVButton({ language }) {
  const [state, setState] = useState("idle");
  let idleText = "";
  if (language === "en") {
    idleText = "Download CV";
  } else if (language === "sl") {
    idleText = "Prenesi CV";
  } else if (language === "rs") {
    idleText = "Preuzmi CV";
  }

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
      idleText={idleText}
      style={{ fontSize: 16, padding: "10px 20px", zIndex: "1" }}
    />
  );
}
