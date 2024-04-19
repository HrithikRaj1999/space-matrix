import { Link } from "react-router-dom";
import useThemeContext from "../hooks/useThemeContext";

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();
  return (
    <nav
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      <h1>Space Matrix Task</h1>
      <div
        style={{
          gap: "2px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <button onClick={toggleTheme}>{mode === "light" ? "🌞" : "🌜"}</button>
      </div>
    </nav>
  );
};

export default Navbar;
