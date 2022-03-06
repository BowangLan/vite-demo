import React from "react";
import PageHeader from "./PageHeader";
import TabBar from "./TabBar";

type PageWrapperPropTypes = {
  children: any;
};
export default function PageWrapper({ children }: any) {
  const tabbarHeight = "14";
  const headerHeight = "14";
  console.log("render PageWrapper");
  // const classes = {
  //   header: `fixed top-0 left-0 right-0 h-${headerHeight} z-50`,
  //   main: `absolute top-${headerHeight} left-0 right-0 bottom-${tabbarHeight} sm:bottom-0 bg-slate-200 flex flex-col items-stretch overflow-y-scroll`,
  //   tabbar: `fixed left-0 right-0 bottom-0 h-${tabbarHeight}`,
  // };
  const classes = {
    container: `absolute inset-0 flex flex-col items-stretch`,
    header: `flex-none shrink-0 h-14 z-50`,
    main: `flex-1 sm:bottom-0 bg-slate-200 flex flex-col items-stretch overflow-y-scroll`,
    tabbar: `flex-none shrink-0 ${tabbarHeight} z-50`,
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <PageHeader title="Econmerse App" />
      </div>
      <div className={classes.main}>{children}</div>
      <div className={classes.tabbar}>
        <TabBar />
      </div>
    </div>
  );
}
