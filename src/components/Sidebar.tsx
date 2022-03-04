import React from "react";
import { HiOutlineX } from "react-icons/hi";
import FullScreenAnimation from "./FullScreenAnimation";

export default function Sidebar(props: any) {
  const { show, close, width = "w-auto", bg = "bg-white" } = props;
  let classes = {
    container: `absolute ${width} h-full flex flex-cols`,
  };
  return (
    <FullScreenAnimation
      show={show}
      close={close}
      widht="w-full sm:w-1/2"
      height="h-full"
      round="rounded-none"
      bg="bg-sky-100"
      parentFlex="justify-end"
      animateIn="fadeInRight"
      animateOut="fadeOutRight"
      aDuration="500ms"
    >
      <div className="p-8 w-full flex justify-between items-center">
        <h2 className="text-xl font-bold tracking-wider">
          Yoour Shopping Card
        </h2>
        <span
          className="h-12 w-12 flex-grow-0 flex-shrink-0 flex justify-center items-center cursor-pointer"
          onClick={close}
        >
          <HiOutlineX className="h-6 w-6 text-slate-800" />
        </span>
      </div>
    </FullScreenAnimation>
  );
}
