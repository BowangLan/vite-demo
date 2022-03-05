import React from 'react'

export default function User({data}: any) {
  return (
    <div className="group p-4 bg-white rounded-xl flex flex-col items-center duration-500 ease-out hover:scale-105 hover:bg-gradient-to-b hover:from-sky-50">
      <img src={data.picture.large} className="w-24 h-24 rounded-full" alt="user picture" />
      <div className="p-4">
        <h2 className="text-center font-semibold group-hover:text-sky-600 duration-300">
          <span className="text-xl tracking-wide font-serif">{data.name.first} {data.name.last}</span>
        </h2>
        <span className="text-slate-500 group-hover:text-sky-500 duration-300">{data.email}</span>
      </div>
    </div>
  )
}
