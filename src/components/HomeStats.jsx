import React from "react";

function HomeStats({ data }) {
  return (
    <div className=" rounded-2xl w-full my-5 bg-teal-200 bg-opacity-10 dark:bg-opacity-20">
      <div className="flex justify-around items-center py-4">
        <div className="text-center w-1/2 border-r border-slate-400">
          <div className="text-sm text-teal-500 dark:text-teal-200">
            avg consumption
          </div>
          <div className="text-4xl font-bold">{data.consumption}</div>
          <div className="text-xs text-zinc-400">l/100km</div>
        </div>
        <div className="text-center w-1/2">
          <div className="text-sm text-teal-500 dark:text-teal-200">
            avg price
          </div>
          <div className="text-4xl font-bold">{data.price}</div>
          <div className="text-xs text-zinc-400">czk/l</div>
        </div>
      </div>
    </div>
  );
}

export default HomeStats;
