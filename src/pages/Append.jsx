import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Keyboard from "../components/Keyboard";
import { HandleNumpadClick } from "../services/NumpadService";

function Append() {
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [price, setPrice] = useState("0");
  const [gasPrice, setGasPrice] = useState("0");
  const [isWrongInput, setIsWrongInput] = useState(false);

  //Handle numpad clicks
  function handlePriceNumpadClick(newValue) {
    setPrice(HandleNumpadClick(price, newValue));
  }

  function handleGasPriceNumpadClick(newValue) {
    setGasPrice(HandleNumpadClick(gasPrice, newValue));
  }
  return (
    <div className="p-2 pb-16">
      {isFirstPage ? (
        <>
          {/* Datepicker */}
          <div className="w-full flex justify-center items-center">
            <DatePicker
              dateFormat="dd.MM. yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              withPortal
              disabledKeyboardNavigation
              className="text-center dark:bg-zinc-900 bg-zinc-100 rounded-lg py-1 mb-2 cursor-pointer"
            />
          </div>

          {/* Heading */}
          <div className="flex justify-around bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            <a className="w-1/2 tab tab-active font-semibold bg-zinc-200 dark:bg-zinc-800 rounded-lg m-1">
              Money paid
            </a>
            <a
              className="w-1/2 tab  m-1"
              onClick={() => {
                if (parseFloat(price) > 0) {
                  setIsFirstPage(!isFirstPage);
                  setIsWrongInput(false);
                } else setIsWrongInput(true);
              }}
            >
              Price per liter
            </a>
          </div>
          <h1 className="text-center text-sm mt-2">How much did you pay?</h1>
          <p className="text-center text-5xl font-bold mt-2">{price}</p>
          <p className="text-center text-sm mb-2 text-zinc-400">czk</p>
          {isWrongInput && (
            <p className="text-center text-rose-400">
              You have to enter a value!
            </p>
          )}

          {/* Keyboard */}
          <Keyboard handleClick={handlePriceNumpadClick} />

          {/* submit */}
          <div className="w-full flex justify-center items-center mt-5">
            <button
              className="btn btn-wide bg-teal-400 dark:bg-teal-200 dark:text-zinc-900 dark:hover:text-zinc-100 border-0"
              onClick={() => {
                if (parseFloat(price) > 0) {
                  setIsFirstPage(!isFirstPage);
                  setIsWrongInput(false);
                } else setIsWrongInput(true);
              }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          {/* DatePicker */}
          <div className="w-full flex justify-center items-center">
            <DatePicker
              dateFormat="dd.MM. yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              withPortal
              disabledKeyboardNavigation
              className="text-center dark:bg-zinc-900 bg-zinc-100 rounded-lg py-1 mb-2 cursor-pointer"
            />
          </div>

          {/* Heading */}
          <div className="flex justify-around bg-zinc-100  dark:bg-zinc-900 rounded-lg">
            <a
              className="w-1/2 tab m-1"
              onClick={() => setIsFirstPage(!isFirstPage)}
            >
              Money paid
            </a>
            <a className="w-1/2 tab  tab-active font-semibold bg-zinc-200 dark:bg-zinc-800 rounded-lg m-1">
              Price per liter
            </a>
          </div>
          <h1 className="text-center text-sm mt-2">
            What is the price of one liter?
          </h1>
          <p className="text-center text-5xl font-bold mt-2">{gasPrice}</p>
          <p className="text-center text-sm mb-2 text-zinc-400">czk</p>
          {isWrongInput && (
            <p className="text-center text-rose-400">
              You have to enter a value!
            </p>
          )}
          {/* Keyboard */}
          <Keyboard handleClick={handleGasPriceNumpadClick} />

          {/* submit */}
          <div className="w-full flex justify-center items-center mt-5">
            <button
              className="btn btn-wide bg-teal-400 dark:bg-teal-200 dark:text-zinc-900 dark:hover:text-zinc-100 border-0"
              onClick={() => navigate("/")}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Append;
