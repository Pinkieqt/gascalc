import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/Firebase-config";

function Settings() {
  let navigate = useNavigate();

  // Function to Logout
  function logout() {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="p-3 pb-16">
      <h1 className="text-center text-xl font-bold my-5">Settings</h1>
      <h1 className="text-center text-xl my-20">Nothing here 😒</h1>

      {/* logout */}
      <div className="w-full flex justify-center items-center mt-5">
        <button
          className="btn btn-wide bg-teal-400 dark:bg-teal-200 dark:text-zinc-900 dark:hover:text-zinc-100 border-0"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
