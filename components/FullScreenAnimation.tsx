import React, { useEffect, useRef, useState } from "react";

export default function FullScreenAnimation({
  show,
  onClose,
  children,
  width = "w-full md:w-2/3 xl:w-1/2",
  height = "h-full md:h-auto",
  bg = "bg-white",
  round = "roudned-xl",
  parentFlex = "justify-center items-center",

  animateIn = "zoomIn",
  animateOut = "fadeOutUp",
  aDuration = "500ms",
  animate = true,

  wrapperBg = "bg-black/70",
}: any) {
  const a = `animate__${animateIn}`;
  const b = `animate__${animateOut}`;
  const ref = useRef<HTMLDivElement>(null);
  const wref = useRef<HTMLDivElement>(null);

  // initialize
  useEffect(() => {
    if (!ref.current) return;
    if (animate) {
      ref.current.addEventListener("animationend", endAnimation);
    }
  }, [ref]);

  const endAnimation = (e: any) => {
    if (!ref.current || !wref.current) return;
    console.log("animation end");
    console.log(ref.current.style.animation);
    e.stopPropagation();
    if (ref.current.style.animationName === animateOut) {
      console.log("before hide");
      _hide(ref, wref);
      console.log("after hide");
    } else {
      console.log("remove animate a");
    }
    ref.current.style.animationPlayState = 'paused'
  };

  const _hide = (ref: any, wref: any) => {
    // ref.current.classList.remove("hidden");
    // wref.current.classList.add("hidden");
    console.log("hide");
    ref.current.style.display = "none";
    wref.current.style.display = "none";
    if (onClose) onClose();
  };

  const _show = (ref: any, wref: any) => {
    // ref.current.classList.remove("hidden");
    // wref.current.classList.remove("hidden");
    console.log("show");
    ref.current.style.display = "flex";
    wref.current.style.display = "flex";
  };

  const startShow = (ref: any, wref: any) => {
    if (animate) {
      console.log("animate a");
      // ref.current.classList.add(a);
      ref.current.style.animation = animateIn;
      ref.current.style.animationPlayState = 'running'
      ref.current.style.animationDuration = aDuration;
    }
    _show(ref, wref);
    // animate background by adding the background color class
    setTimeout(() => {
      if (!wref.current) return;
      if (!wref.current.classList.contains(wrapperBg)) {
        console.log("add wrapper background class", wrapperBg);
        wref.current.classList.add(wrapperBg);
      }
    }, 50);
  };

  const startFade = (ref: any, wref: any) => {
    if (ref.current.style.display == "none") {
      return;
    }
    if (animate) {
      console.log("animate b");
      // ref.current.classList.add(b);
      ref.current.style.animation = animateOut;
      ref.current.style.animationPlayState = 'running'
      ref.current.style.animationDuration = aDuration;
    } else {
      _hide(ref, wref);
    }
    // animate background
    if (wref.current.classList.contains(wrapperBg)) {
      console.log("remove background...");
      wref.current.classList.remove(wrapperBg);
    }
  };

  useEffect(() => {
    if (!ref.current || !wref.current) return;
    if (show) {
      startShow(ref, wref);
    } else {
      startFade(ref, wref);
    }
  }, [show]);

  const classes = {
    wrapper: `hidden fixed right-0 left-0 top-0 bottom-0 z-50 flex ${parentFlex} transition-all duration-500`,
    modalContainer: `hidden relative ${width} ${height} flex flex-col ${bg} ${round} transition-all duration-500 [animation-duration:${aDuration}]`,
  };
  return (
    <div ref={wref} className={classes.wrapper}>
      <div
        ref={ref}
        className={classes.modalContainer}
        style={{
          animationDuration: aDuration,
        }}
      >
        {children}
      </div>
    </div>
  );
}
