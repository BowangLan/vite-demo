import React from "react";

type PageWrapperPropTypes = {
  children: any;
};

export default function PageWrapper({ children }: any) {
  return (
    <div className="relative min-w-screen min-h-screen bg-slate-200  flex flex-col items-center">
      {children}
    </div>
  );
}
