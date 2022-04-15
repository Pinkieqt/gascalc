import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import HomeStats from "../components/HomeStats";

function Home() {
  const [dashData, setDashData] = useState({ consumption: 0, price: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  function generateDumbData() {
    let data = [];
    for (let i = 0; i < 34; i++) {
      data.push({
        date: Math.floor(Math.random() * 30).toString() + ".03.2022",
        price: parseFloat((Math.random() * 44 + 33).toFixed(2)),
        paid: Math.floor(Math.random() * 1600) + 350,
        distance: Math.floor(Math.random() * 1000) + 1,
        consumption: parseFloat((Math.random() * 8 + 5).toFixed(2)),
      });
    }
    return data;
  }

  const data = generateDumbData();

  useEffect(() => {
    getDashboardData();
  }, []);

  // Calc dashboard data
  function getDashboardData() {
    let tmpCons = 0;
    let tmpPrice = 0;
    data.forEach((el) => {
      tmpPrice += el.price;
      tmpCons += el.consumption;
    });
    setDashData({
      consumption: (tmpCons / data.length).toFixed(2),
      price: (tmpPrice / data.length).toFixed(2),
    });
  }

  return (
    <div className="p-2 pb-16">
      {/* Header */}
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="mt-5 text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-teal-200 to-lime-200">
          Hello,
        </h1>
        <h1 className="w-2/3 text-center text-lg text-zinc-400">
          add your data and see how economical you are!
        </h1>
      </div>
      <HomeStats data={dashData} />

      <h1 className="text-center text-xl font-bold my-5">History</h1>

      {data.map((el) => {
        if (
          data.indexOf(el) < currentPage * 10 &&
          data.indexOf(el) > currentPage * 10 - 11
        )
          return (
            <label
              key={data.indexOf(el)}
              htmlFor="my-modal-6"
              className="w-full  rounded-2xl flex justify-between items-center px-3 py-2 mb-2 cursor-pointer bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 hover:dark:bg-zinc-800 transition"
            >
              <div className="rounded-full text-black bg-gradient-to-tr from-teal-200 to-lime-200 font-bold w-10 h-10 flex justify-center items-center mr-3">
                {data.indexOf(el) + 1}
              </div>
              <div className="grow">
                <p className="font-semibold">Paid: {el.paid} czk</p>
                <p className="text-zinc-400 text-sm">Price: {el.price} czk</p>
                <p className="text-zinc-400 text-sm">Dist: {el.distance} km</p>
              </div>
              <div className="text-right">
                <p className="font-semibold mb-2">{el.consumption}</p>
                <p className="text-zinc-400 text-sm">{el.date}</p>
              </div>
            </label>
          );
      })}

      <div className="w-full flex justify-center my-10">
        <div
          className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-l-xl cursor-pointer hover:bg-zinc-200 hover:dark:bg-zinc-800 transition"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          <ArrowLeft />
        </div>
        <div className="py-4 px-10 bg-zinc-100 dark:bg-zinc-900 ">
          Page {currentPage}
        </div>
        <div
          className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-r-xl cursor-pointer hover:bg-zinc-200 hover:dark:bg-zinc-800 transition"
          onClick={() =>
            currentPage * 10 < data.length && setCurrentPage(currentPage + 1)
          }
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
