import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Append from "./pages/Append";
import Keyboard from "./components/Keyboard";
import React, { useState } from "react";
import { HandleNumpadClick } from "./services/NumpadService";
import Login from "./pages/Login";

function App() {
  let loc = useLocation();
  const [modalDistance, setModalDistance] = useState("0");

  //Handle numpad clicks
  function handleDistanceInput(newValue) {
    setModalDistance(HandleNumpadClick(modalDistance, newValue));
  }

  return (
    <div className="dark:text-zinc-100 text-zinc-600 min-h-screen">
      {loc.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="add" element={<Append />} />
        <Route path="login" element={<Login />} />
      </Routes>

      {/* Modal */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">What distance did you cover?</h3>

          <p className="text-center text-5xl font-bold mt-2">{modalDistance}</p>
          <p className="text-center text-sm mb-2 text-zinc-400">km</p>

          <Keyboard handleClick={handleDistanceInput} />

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-ghost">
              Close
            </label>
            <label
              htmlFor="my-modal-6"
              className="btn bg-teal-400 dark:bg-teal-200 dark:text-zinc-900 dark:hover:text-zinc-100 border-0"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
