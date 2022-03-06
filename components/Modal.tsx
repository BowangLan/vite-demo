import React, { useEffect, useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import FullScreenAnimation from "./layout/FullScreenAnimation";

export const SimpleModal = ({
  title,
  titleColor,
  content,
  contentColor,
  ...rest
}: any) => {
  return (
    <FullScreenAnimation {...rest}>
      {/* Title Bar */}
      <div className="w-full px-6 py-4 flex justify-between items-center border-b-2 border-b-slate-100">
        <h2
          className={`w-auto flex-auto  text-${titleColor} text-2xl font-sans font-bold tracking-wide`}
        >
          {title}
        </h2>
        <span
          className="h-12 w-12 flex-grow-0 flex-shrink-0 flex justify-center items-center cursor-pointer"
          onClick={close}
        >
          <HiOutlineX className="h-6 w-6 text-slate-800" />
        </span>
      </div>

      <div className="w-full px-6 py-6 border-t-slate-300 tracking-wide">
        {content}
      </div>
    </FullScreenAnimation>
  );
};

export const ModalExample1 = ({ show, close }: any) => {
  return (
    <FullScreenAnimation show={show} close={close} aDuration="300ms">
      {/* <div className="absolute right-0 top-0">
          <span className="h-12 w-12 flex justify-center items-center" onClick={close}>
            <HiOutlineX className="h-6 w-6 text-slate-800" />
          </span>
        </div> */}

      {/* Title Bar */}
      <div className="w-full px-6 py-4 flex justify-between items-center border-b-2 border-b-slate-100">
        <h2 className="w-auto flex-auto  text-cyan-900 text-2xl font-sans font-bold tracking-wide">
          Modal Title
        </h2>
        <span
          className="h-12 w-12 flex-grow-0 flex-shrink-0 flex justify-center items-center cursor-pointer"
          onClick={close}
        >
          <HiOutlineX className="h-6 w-6 text-slate-800" />
        </span>
      </div>

      <div className="w-full px-6 py-6 border-t-slate-300 tracking-wide">
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          veniam iure accusamus aspernatur molestiae asperiores, quam tempore ex
          consectetur culpa sint nihil debitis nostrum eius quibusdam repellat
          neque eveniet natus.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quod
          cupiditate vitae iure aliquid exercitationem autem officiis veniam
          molestiae tempore, voluptates suscipit ea dolore quas! Placeat odit
          laboriosam omnis fuga?
        </p>
      </div>
    </FullScreenAnimation>
  );
};
