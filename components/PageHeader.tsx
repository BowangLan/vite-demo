import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiUser } from "react-icons/hi";
import IconWrapper from "./IconWrapper";
import navItems from "../config/nav";
import useCurrentTab from "../hooks/useCurrentTab";

export default function PageHeader({ title }: any) {
  // const [currentNavIndex, setCurrentNavIndex] = useState(0);
  const currentNavIndex = useCurrentTab();
  const navRef = useRef<HTMLDivElement>(null);

  const hideMobileNav = (navRef: any) => {
    for (let i = 0; i < navRef.current.children.length; i++) {
      navRef.current.children[i].classList.remove("h-auto", "px-6", "py-5");
      navRef.current.children[i].classList.add("h-0");
    }
  };

  const showMobileNav = (navRef: any) => {
    for (let i = 0; i < navRef.current.children.length; i++) {
      navRef.current.children[i].classList.remove("h-0");
      navRef.current.children[i].classList.add("h-auto", "px-6", "py-5");
    }
  };

  const toggleMobileNavContainer = (e: any) => {
    console.log("toggle mobile nav container");
    if (!navRef.current) return;
    if (!navRef.current.children[0].classList.contains("h-0")) {
      // show -> hide
      console.log("show to hide");
      hideMobileNav(navRef);
    } else {
      // hide -> show
      console.log("hide to show");
      showMobileNav(navRef);
    }
  };

  useEffect(() => {
    if (!navRef.current) return;
    console.log("navRef not null");
    navRef.current.addEventListener("touchend", toggleMobileNavContainer);
  }, [navRef]);

  let classes = {
    container: `relative sticky top-0 left-0 w-full h-14 sm:h-12 xl:h-16 shrink-0 grow-0 flex justify-center sm:justify-between items-stretch bg-white z-10`,
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
        <span className={classes.titleText}>{title}</span>
      </div>
      <IconWrapper onClick={toggleMobileNavContainer} side="left">
        <HiOutlineMenu className={classes.icon} />
      </IconWrapper>
      <IconWrapper side="right">
        <HiUser className={classes.icon} />
      </IconWrapper>
      <div ref={navRef} className={classes.navContainer}>
        {navItems.map((item: any, index: number) => (
          <Link key={index} href={item.url} passHref>
            <a className={classes.buildNavItemContainer(index)}>{item.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
