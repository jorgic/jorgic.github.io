import "./HomeButton.css";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

export default function HomeButton() {
  return (
    <Link to="/" className="HomeButton">
      <HiHome size={40} color="black" />
    </Link>
  );
}
