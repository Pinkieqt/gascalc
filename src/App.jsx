import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Append from "./pages/Append";

function App() {
  return (
    <div className="dark:text-zinc-100 text-zinc-600 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="append" element={<Append />} />
      </Routes>

      {/* Modal */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">What distance did you cover?</h3>
          <input
            type="number"
            placeholder="Type here"
            className="input input-primary w-full max-w-xs my-5"
          />
          <div className="modal-action">
            <label for="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
