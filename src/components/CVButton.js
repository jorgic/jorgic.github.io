import { useState } from "react";
import ReactiveButton from "reactive-button";

import cv from "../assets/cv.pdf";

export default function CVButton({ language }) {
  const [state, setState] = useState("idle");
  let idleText = "";
  let loadingText = "";
  let successText = "";
  if (language === "en") {
    idleText = "Download CV";
    loadingText = "Loading";
    successText = "Success";
  } else if (language === "sl") {
    idleText = "Prenesi CV";
    loadingText = "Nalaganje..";
    successText = "Uspešno!";
  } else if (language === "rs") {
    idleText = "Preuzmi CV";
    loadingText = "Sačekajte..";
    successText = "Uspešno!";
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
      loadingText={loadingText}
      successText={successText}
      animation={true}
      style={{ fontSize: 16, padding: "10px 20px", zIndex: "1" }}
    />
  );
}
