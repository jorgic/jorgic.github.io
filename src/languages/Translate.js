import React, { useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import en from "./en.json";
import rs from "./rs.json";
import sl from "./sl.json";

export default function Translate({ string }) {
  const [langs, setLangs] = useState({ en, rs, sl });

  return (
    <LanguageContext.Consumer>
      {(value) => langs[value][string]}
    </LanguageContext.Consumer>
  );
}
