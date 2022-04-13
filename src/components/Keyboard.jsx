import React from "react";

function Keyboard() {
  const keyStyle = "mt-5 text-xl btn btn-circle";
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-evenly items-center">
        <button className={keyStyle}>1</button>
        <button className={keyStyle}>2</button>
        <button className={keyStyle}>3</button>
      </div>
      <div className="flex justify-evenly items-center">
        <button className={keyStyle}>4</button>
        <button className={keyStyle}>5</button>
        <button className={keyStyle}>6</button>
      </div>
      <div className="flex justify-evenly items-center">
        <button className={keyStyle}>7</button>
        <button className={keyStyle}>8</button>
        <button className={keyStyle}>9</button>
      </div>
      <div className="flex justify-evenly items-center">
        <button className={keyStyle}>del</button>
        <button className={keyStyle}>0</button>
        <button className={keyStyle}>.</button>
      </div>
    </div>
  );
}

export default Keyboard;
