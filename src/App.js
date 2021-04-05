import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/projects/" component={Projects} />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
