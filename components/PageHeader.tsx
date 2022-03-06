import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { HiOutlineMenu, HiUser } from "react-icons/hi";
import IconWrapper from "./IconWrapper";
import { navItems, siteTitle } from "../config";
import useCurrentTab from "../hooks/useCurrentTab";
import { networkInterfaces } from "os";

export const hideMobileNav = () => {
  const navRef = document.getElementById("nav-container") as HTMLDivElement;
  for (let i = 0; i < navRef.children.length; i++) {
    const c = navRef.children[i] as HTMLAnchorElement;
    c.style.height = "0px";
  }
};

export const showMobileNav = () => {
  const navRef = document.getElementById("nav-container") as HTMLDivElement;
  for (let i = 0; i < navRef.children.length; i++) {
    const c = navRef.children[i] as HTMLAnchorElement;
    c.style.height = "4rem";
  }
};

export const toggleMobileNavContainer = () => {
  console.log("toggle mobile nav container");
  const navRef = document.getElementById("nav-container") as HTMLDivElement;
  const c1 = navRef.children[0] as HTMLAnchorElement;
  if (c1.style.height !== "" && c1.style.height !== "0px") {
    // show -> hide
    console.log("show to hide");
    hideMobileNav();
  } else {
    // hide -> show
    console.log("hide to show");
    showMobileNav();
  }
};

export default function PageHeader({}: any) {
  const [currentNavIndex, changeTab] = useCurrentTab();

  console.log("render PageHeader", currentNavIndex);

  const handleAClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
      console.log("handle changeTab, index: " + index);
      e.preventDefault();
      changeTab(index);
    },
    [changeTab]
  );

  let classes = {
    container: `relative sticky w-full h-full shrink-0 grow-0 flex justify-center sm:justify-between items-stretch bg-white`,
    titleContainer: `sm:ml-5 flex items-center`,
    titleText: `text-lg font-medium tracking-wider`,
    navContainer: `absolute left-0 top-full w-full flex flex-col gap-0 justify-center items-stretch bg-white overflow-hidden transition-all duration-500 sm:static sm:left-auto sm:top-auto sm:w-auto sm:flex-row sm:items-stretch`,
    buildNavItemContainer: (i: number) => {
      const common = `h-0 flex justify-center items-center tracking-wider transition-all duration-300 cursor-pointer z-50 transition-all duration-300 ease-out overflow-hidden sm:h-auto sm:px-6 sm:py-5 sm:hover:bg-sky-100 sm:z-0`;
      return (
        common +
        (i === currentNavIndex
          ? `text-sky-700 bg-sky-100 border-b border-b-sky-700`
          : `hover:text-sky-700`)
      );
    },
    icon: `w-7 h-7 text-slate-500`,
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <span className={classes.titleText}>{siteTitle}</span>
      </div>
      <IconWrapper onClick={toggleMobileNavContainer} side="left">
        <HiOutlineMenu className={classes.icon} />
      </IconWrapper>
      <IconWrapper side="right">
        <HiUser className={classes.icon} />
      </IconWrapper>
      <div
        id="nav-container"
        className={classes.navContainer}
        onTouchEnd={toggleMobileNavContainer}
      >
        {navItems.map((item: any, index: number) => (
          <Link key={index} href={item.url} passHref>
            <a
              className={classes.buildNavItemContainer(index)}
              onClick={(e) => handleAClick(e, index)}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
