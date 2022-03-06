import { useRouter } from "next/router";
import { useCallback } from "react";
import { navItems } from "../config";

const useCurrentTab = (): [number, (i: number) => void] => {
  const router = useRouter();
  // const changeTab = useCallback(
  //   (i: number) => {
  //     router.push(navItems[i].url);
  //   },
  //   [router]
  // );
  const changeTab = (i: number) => {
    console.log("changeTab", i);
    router.push(navItems[i].url);
  };
  console.log("called useCurrentTab", router.pathname);
  let cur = 0;
  if (router.pathname === "/") {
    cur = 0;
  } else {
    for (let i = 1; i < navItems.length; i++) {
      if (router.pathname.startsWith(navItems[i].url)) {
        cur = i;
        break;
      }
    }
  }
  return [cur, changeTab];
};

export default useCurrentTab;
