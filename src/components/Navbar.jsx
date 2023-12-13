import React from "react";
import { NavLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function Navbar() {
  const { logout, error } = useLogout();
  const { changeMode, mode, user } = useGlobalContext();

  const changeGlobalMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };
  return (
    <div className="flex items-center justify-between bg-lime-300 py-6 px-20">
      <NavLink to="/" className="text-4xl font-bold">
        My Kitchen
      </NavLink>
      <nav className="flex gap-5 items-center">
        <p className="text-gray opacity-75 py-3 px-3 bg-slate-400 rounded">
          Welcome, {user.displayName}{" "}
        </p>
        <button className="buttbon modeBtn" onClick={() => changeGlobalMode()}>
          {mode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
        <button className="logout btn" onClick={logout}>
          Logout
        </button>
        <NavLink className="btn" to="add">
          Create
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
