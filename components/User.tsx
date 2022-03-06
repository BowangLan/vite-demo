import React from "react";
import Image from "next/image";

export default function User({ data }: any) {
  return (
    <div className="group p-4 bg-white rounded-xl flex flex-col items-center duration-500 ease-out sm:hover:scale-105 hover:bg-gradient-to-b hover:from-sky-50">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
        <img src={data.picture.large} alt="user picture" />
      </div>
      <div className="py-4">
        <h2 className="text-center font-semibold group-hover:text-sky-600 duration-300">
          <span className="text-xl tracking-wide font-serif">
            {data.name.first} {data.name.last}
          </span>
        </h2>
        <span className="text-slate-500 group-hover:text-sky-500 duration-300">
          {data.email}
        </span>
      </div>
    </div>
  );
}
