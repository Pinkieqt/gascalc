import React from "react";
import HomeStats from "../components/HomeStats";

function Home() {
  const data = [
    { date: "12.03.1998", price: 33, paid: 300, distance: 149 },
    { date: "12.03.1998", price: 33, paid: 300, distance: 149 },
    { date: "12.03.1998", price: 33, paid: 300, distance: 149 },
    { date: "12.03.1998", price: 33, paid: 300, distance: 149 },
    { date: "12.03.1998", price: 33, paid: 300, distance: 149 },
    { date: "12.03.1998", price: 33, paid: 300, distance: 149 },
    { date: "12.03.1998", price: 33, paid: 300, distance: 149 },
  ];

  return (
    <div className="p-3 pb-16">
      {/* Header */}
      <h1 className="text-center text-3xl font-bold">Gas Calculator</h1>
      <HomeStats data={{ price: 22 }} />

      <h1 className="text-center text-xl font-bold my-5">History</h1>

      {data.map((el) => {
        return (
          <label
            key={data.indexOf(el)}
            for="my-modal-6"
            className="w-full shadow rounded-lg flex justify-between items-center px-2 py-3 mb-2 pointer-cursor bg-zinc-100 dark:bg-zinc-900"
          >
            <div className="rounded-full bg-rose-100 dark:bg-rose-400 font-bold w-10 h-10 flex justify-center items-center mr-3">
              {data.indexOf(el) + 1}
            </div>
            <div className="grow">
              <p className="font-semibold">Paid: {el.paid} czk</p>
              <p className="text-zinc-400 text-sm">Price: {el.price} czk</p>
              <p className="text-zinc-400 text-sm">Dist: {el.distance} km</p>
            </div>
            <div className="text-right">
              <p className="font-semibold mb-2">7.42</p>
              <p className="text-zinc-400 text-sm">{el.date}</p>
            </div>
          </label>
        );
      })}
    </div>
  );
}

export default Home;
