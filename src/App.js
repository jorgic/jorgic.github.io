import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { LanguageContext } from "./contexts/LanguageContext";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <LanguageContext.Provider value={language}>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route
            exact
            path="/"
            component={() => (
              <Home language={language} setLanguage={setLanguage} />
            )}
          />
          <Route path="/about/" component={About} />
          <Route path="/projects/" component={Projects} />
        </AnimatedSwitch>
      </LanguageContext.Provider>
    </Router>
  );
}

export default App;
