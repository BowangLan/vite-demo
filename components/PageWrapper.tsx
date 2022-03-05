import React from "react";
import PageHeader from "./PageHeader";
import TabBar from "./TabBar";

type PageWrapperPropTypes = {
  children: any;
};
export default function PageWrapper({ children }: any) {
  console.log("render PageWrapper");
  return (
    <div className="relative w-screen h-screen h-screen bg-slate-200  flex flex-col items-stretch">
      <div className="hidden sm:block w-full">
        <PageHeader title="Econmerse App" />
      </div>
      <div className="w-full grow flex flex-col items-stretch overflow-auto">
        {children}
      </div>
      <TabBar />
    </div>
  );
}
