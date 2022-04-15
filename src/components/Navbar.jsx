import React from "react";
import { Home, PlusCircle, Settings } from "react-feather";
import { Link, NavLink } from "react-router-dom";

function Navbar({ children }) {
  return (
    <div className="fixed bottom-0 left-0 w-full h-14 bg-zinc-100 dark:bg-zinc-900 rounded-t-2xl ">
      <div className="flex h-full justify-between items-center">
        <div className="w-1/3 text-center">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-teal-400 dark:text-teal-200" : ""
            }
          >
            <button className="btn btn-ghost">
              <Home />
            </button>
          </NavLink>
        </div>
        <div className="w-1/3 text-center">
          <NavLink
            to="add"
            className={(navData) =>
              navData.isActive ? "text-teal-400 dark:text-teal-200" : ""
            }
          >
            <button className="btn btn-ghost">
              <PlusCircle />
            </button>
          </NavLink>
        </div>
        <div className="w-1/3 text-center">
          <NavLink
            to="settings"
            className={(navData) =>
              navData.isActive ? "text-teal-400 dark:text-teal-200" : ""
            }
          >
            <button className="btn btn-ghost">
              <Settings />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
