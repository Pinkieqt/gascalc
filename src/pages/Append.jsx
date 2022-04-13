import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Keyboard from "../components/Keyboard";

function Append() {
  const [startDate, setStartDate] = useState(new Date());
  const [isFirstPage, setIsFirstPage] = useState(true);

  return (
    <div className="p-3 pb-16">
      {isFirstPage ? (
        <>
          <div className="w-full flex justify-center items-center">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              withPortal
              className="text-center dark:bg-zinc-900 bg-zinc-100 rounded-lg py-1 mb-2 cursor-pointer"
            />
          </div>
          <div class="flex justify-around bg-zinc-100 dark:bg-zinc-900 rounded-lg">
            <a class="w-1/2 tab tab-active font-semibold bg-zinc-200 dark:bg-zinc-800 rounded-lg m-1">
              Money paid
            </a>
            <a class="w-1/2 tab  m-1" onClick={() => setIsFirstPage(!isFirstPage)}>
              Price per liter
            </a>
          </div>
          <h1 className="text-center text-sm my-5">How much did you pay?</h1>
          <p className="text-center text-4xl font-bold mt-10">0</p>
          <p className="text-center text-sm mb-5">czk</p>
          <Keyboard />
          <div className="w-full flex justify-center items-center mt-5">
            <button className="btn btn-wide" onClick={() => setIsFirstPage(!isFirstPage)}>
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-center items-center">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              withPortal
              className="text-center dark:bg-zinc-900 bg-zinc-100 rounded-lg py-1 mb-2 cursor-pointer"
            />
          </div>
          <div class="flex justify-around bg-zinc-100  dark:bg-zinc-900 rounded-lg">
            <a class="w-1/2 tab m-1" onClick={() => setIsFirstPage(!isFirstPage)}>
              Money paid
            </a>
            <a class="w-1/2 tab  tab-active font-semibold bg-zinc-200 dark:bg-zinc-800 rounded-lg m-1">
              Price per liter
            </a>
          </div>
          <h1 className="text-center text-sm my-5">What is the price of one liter?</h1>
          <p className="text-center text-4xl font-bold mt-10">0</p>
          <p className="text-center text-sm mb-5">czk</p>
          <Keyboard />
          <div className="w-full flex justify-center items-center mt-5">
            <button className="btn btn-wide" onClick={() => setIsFirstPage(!isFirstPage)}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Append;
