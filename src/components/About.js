import "./About.css";

import Link from "react-router-dom/Link";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
