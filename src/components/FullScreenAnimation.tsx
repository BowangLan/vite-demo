import React, { useEffect, useRef, useState } from "react";

export default function FullScreenAnimation({
  show,
  onClose,
  children,
  width = "w-full md:w-2/3 xl:w-1/2",
  height = "h-full md:h-auto",
  bg = "bg-white",
  round="roudned-xl",
  parentFlex = "justify-center items-center",
  animateIn = "zoomIn",
  animateOut = "fadeOutUp",
  aDuration = "500ms",
  wrapperBg = 'bg-black/70'
}: any) {
  const a = `animate__${animateIn}`;
  const b = `animate__${animateOut}`;
  const ref = useRef<HTMLDivElement>(null);
  const wref = useRef<HTMLDivElement>(null);

  const endAnimation = (e: any) => {
    if (!ref.current || !wref.current) return;
    e.stopPropagation();
    console.log("remove animate a");
    ref.current.classList.remove(a);
    if (ref.current.classList.contains(b)) {
      console.log("remove animate b");
      ref.current.classList.remove(b);
      wref.current.classList.remove("block");
      wref.current.classList.add("hidden");
      if (onClose) onClose();
    }
  };
  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener("animationend", endAnimation);
  }, [ref]);

  useEffect(() => {
    if (!ref.current || !wref.current) return;
    if (show) {
      console.log("animate a");
      wref.current.classList.remove("hidden");

      // animate background by adding the background color class
      if (!wref.current.classList.contains(wrapperBg)) {
        console.log('add class', wrapperBg);
        wref.current.classList.remove('transparent');
        wref.current.classList.toggle(wrapperBg);
      }
      ref.current.classList.add(a);
      wref.current.classList.add("block");
    } else {
      if (wref.current.classList.contains("hidden")) {
        return;
      }
      console.log("animate b");
      ref.current.classList.add(b);
      if (wref.current.classList.contains(wrapperBg)) {
        wref.current.classList.toggle(wrapperBg);
        wref.current.classList.add('transparent');
      }
    }
  }, [show]);

  const classes = {
    wrapper: `hidden fixed right-0 left-0 top-0 bottom-0 z-50 flex ${parentFlex} transition-all duration-500`,
    modalContainer: `relative ${width} ${height} flex flex-col ${bg} ${round} transition-all duration-500 [animation-duration:${aDuration}]`,
  };
  return (
    <div ref={wref} className={classes.wrapper}>
      <div ref={ref} className={classes.modalContainer} style={{
        animationDuration: aDuration
      }}>
        {children}
      </div>
    </div>
  );
}
