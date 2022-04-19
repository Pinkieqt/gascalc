import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/Firebase-config";

function Login() {
  let navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [wrongPass, setWrongPass] = useState(false);

  // Login
  function logIn() {
    signInWithEmailAndPassword(auth, "gascalc@gascalc.com", pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setWrongPass(false);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setWrongPass(true);
      });
  }

  return (
    <div className="p-2 flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-32 text-4xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-teal-200 to-lime-200">
        Welcome
      </h1>
      <p className="text-zinc-400 mb-2">Password</p>
      {wrongPass && (
        <p className="text-center text-rose-400 mb-2">Wrong password</p>
      )}
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="input border rounded-xl border-emerald-100 w-2/3 max-w-xs mb-10"
      ></input>
      <button
        className="btn btn-wide bg-teal-400 dark:bg-teal-200 dark:text-zinc-900 dark:hover:text-zinc-100 border-0"
        onClick={() => logIn()}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
