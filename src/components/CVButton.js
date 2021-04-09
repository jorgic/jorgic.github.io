import { useState } from "react";
import ReactiveButton from "reactive-button";

import cv_en from "../assets/EN_CV_Radovan_Jorgić.pdf";
import cv_rs from "../assets/RS_CV_Radovan_Jorgić.pdf";
import "animate.css";

export default function CVButton({ language }) {
  const [state, setState] = useState("idle");
  let idleText = "";
  let loadingText = "";
  let successText = "";
  let cv = null;
  if (language === "en") {
    idleText = "Download CV";
    loadingText = "Loading";
    successText = "Success";
    cv = cv_en;
  } else if (language === "sl") {
    idleText = "Prenesi CV";
    loadingText = "Nalaganje..";
    successText = "Uspešno!";
    cv = cv_rs;
  } else if (language === "rs") {
    idleText = "Preuzmi CV";
    loadingText = "Sačekajte..";
    successText = "Uspešno!";
    cv = cv_rs;
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
      className="CVButton animate__animated animate__pulse"
    />
  );
}
