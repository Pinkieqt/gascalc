import React from "react";
import { Link } from "react-router-dom";

function Navbar({ children }) {
  return (
    <div className="fixed bottom-0 left-0 w-full h-14 bg-zinc-100 dark:bg-zinc-900 rounded-t-2xl shadow">
      <div className="flex h-full justify-between items-center">
        <div className="w-1/3 text-center">
          <Link to="/">
            <button className="btn btn-ghost">Home</button>
          </Link>
        </div>
        <div className="w-1/3 text-center">
          <Link to="append">
            <button className="btn btn-ghost">Append</button>
          </Link>
        </div>
        <div className="w-1/3 text-center">
          <Link to="settings">
            <button className="btn btn-ghost">Settings</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
