import React from "react";
import TabBar from "./TabBar";

type PageWrapperPropTypes = {
  children: any;
};

export default function PageWrapper({ children, tabs, currentTabIndex, changeTab }: any) {
  return (
    <div className="relative w-screen h-screen h-screen bg-slate-200  flex flex-col items-stretch">
      <div className="w-full grow flex flex-col items-stretch overflow-auto">{children}</div>
      {tabs && (
        <TabBar tabs={tabs} currentTabIndex={currentTabIndex} changeTab={changeTab}/>
      )}
    </div>
  );
}
