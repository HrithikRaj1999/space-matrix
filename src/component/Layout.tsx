import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useThemeContext from "../hooks/useThemeContext";

export default function Layout() {
  const { mode } = useThemeContext();
  console.log({ mode });
  return (
    <div
      className={mode}
      style={{ color: mode === "light" ? "black" : "white" }}
    >
      <Navbar />
      <div className="main-body">
        <Outlet />
      </div>
    </div>
  );
}
