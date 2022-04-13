import React from "react";

function HomeStats({ data }) {
  return (
    <div className="shadow rounded-lg w-full my-5 bg-zinc-100 dark:bg-zinc-900">
      <div className="flex justify-around items-center py-2">
        <div className="text-center w-1/2 border-r-2">
          <div className="text-sm">Avg consumption</div>
          <div className="text-4xl font-bold">{data.price}</div>
        </div>
        <div className="text-center w-1/2">
          <div className="text-sm">Avg price</div>
          <div className="text-4xl font-bold">{data.price}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeStats;
