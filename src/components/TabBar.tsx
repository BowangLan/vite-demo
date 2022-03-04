import React from "react";

export default function TabBar({ tabs, currentTabIndex, changeTab, bg = 'bg-white' }: any) {
  const classes = {
    container: `sm:hidden w-full h-2/12 flex justify-around ${bg}`,
    itemContainerBuilder: (i: number) => {
      const common = "relative py-4 grow flex justify-center items-center transition-all duration-500 ";
      return common + (i === currentTabIndex ? `text-sky-500 bg-slate-100` : "text-slate-500");
    },
    iconBuilder: (i: number) => {
      const common = `w-8 h-8 `
      // return common + (i === currentTabIndex ? `border-b-2 border-b-sky-500` : "");
      return common;
    },
    lineBuilder: (i: number) => {
      const common = `absolute bottom-3 right-50 h-[2px] bg-sky-500 transition-all duration-500 `;
      // return common + (i === currentTabIndex ? `bg-sky-500` : `bg-transparent`);
      return common + (i === currentTabIndex ? `w-10` : `w-0`);
    }
  };
  return (
    <div className={classes.container}>
      {tabs.map((tab: any, index: number) => (
        <div
          key={index}
          className={classes.itemContainerBuilder(index)}
          onClick={() => changeTab(index)}
        >
          <tab.icon className={classes.iconBuilder(index)} />
          <div className={classes.lineBuilder(index)}></div>
        </div>
      ))}
    </div>
  );
}
