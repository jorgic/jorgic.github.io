import "./HomeButton.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function HomeButton() {
  return (
    <Link to="/" className="HomeButton">
      <FaHome size={40} color="black" />
    </Link>
  );
}
