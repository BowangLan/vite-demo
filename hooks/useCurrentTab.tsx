import { useRouter } from "next/router";
import navItems from "../config/nav";

const useCurrentTab = () => {
  const router = useRouter();
  console.log('called useCurrentTab', router.pathname);
  if (router.pathname === '/') {
    return 0;
  }
  let cur;
  for (let i = 1; i < navItems.length; i++) {
    if (router.pathname.startsWith(navItems[i].url)) {
      return i;
    }
  }
}

export default useCurrentTab;