import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { navItems } from "../config";
import useCurrentTab from "../hooks/useCurrentTab";
import { hideMobileNav } from "./PageHeader";

export default function TabBar({ bg = "bg-white" }: any) {
  const router = useRouter();
  const [currentTabIndex, changeTab] = useCurrentTab();

  console.log("render TabBar", {
    currentTabIndex,
  });

  const handleAClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
      e.preventDefault();
      hideMobileNav();
      changeTab(index);
    },
    [changeTab]
  );

  const classes = {
    container: `sm:hidden w-full h-full flex justify-around ${bg}`,
    itemContainerBuilder: (i: number) => {
      const common =
        "relative py-4 grow flex justify-center items-center transition-all duration-500 ";
      return (
        common +
        (i === currentTabIndex
          ? `text-sky-500 bg-slate-100 border-b border-b-sky-500`
          : "text-slate-500")
      );
    },
    iconBuilder: (i: number) => {
      const common = `w-6 h-6 `;
      // return common + (i === currentTabIndex ? `border-b-2 border-b-sky-500` : "");
      return common;
    },
    lineBuilder: (i: number) => {
      const common = `absolute bottom-3 right-50 h-[2px] bg-sky-500 transition-all duration-500 `;
      // return common + (i === currentTabIndex ? `bg-sky-500` : `bg-transparent`);
      return common + (i === currentTabIndex ? `w-8` : `w-0`);
    },
  };
  return (
    <div className={classes.container}>
      {navItems.map((tab: any, index: number) => (
        <a
          key={index}
          className={classes.itemContainerBuilder(index)}
          onClick={(e) => handleAClick(e, index)}
        >
          <tab.icon className={classes.iconBuilder(index)} />
          {/* <div className={classes.lineBuilder(index)}></div> */}
        </a>
      ))}
    </div>
  );
}
