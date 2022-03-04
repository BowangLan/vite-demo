import { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiUser } from "react-icons/hi";
import IconWrapper from './IconWrapper';

// const IconWrapper = ({ children, onClick, side = 'left' }: any) => {
//   const classes = {
//     iconContainer: `sm:hidden absolute ${side}-0 h-full px-4 flex justify-center items-center`,
//     icon: `w-6 h-6 text-slate-500`,
//   }

//   return (
//     <div className={classes.iconContainer} onClick={onClick}>
//     {children}
//     </div>
//   )
// }

export default function PageHeader({ title, navItems }: any) {
  const [currentNavIndex, setCurrentNavIndex] = useState(0);
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
    container: `relative w-full h-14 sm:h-12 xl:h-16 shrink-0 grow-0 flex justify-center sm:justify-between items-stretch bg-white`,
    titleContainer: `sm:ml-4 flex items-center`,
    titleText: `text-md font-medium tracking-wider`,
    navContainer: `absolute left-0 top-full w-full flex flex-col gap-0 justify-center items-stretch bg-white overflow-hidden transition-all duration-500 sm:static sm:left-auto sm:top-auto sm:w-auto sm:flex-row sm:items-stretch`,
    buildNavItemContainer: (i: number) => {
      const common = `h-0 flex justify-center items-center transition-all duration-300 cursor-pointer z-50 transition-all duration-300 ease-out overflow-hidden sm:h-auto sm:px-6 sm:py-5 sm:hover:bg-sky-100 sm:z-0`;
      return (
        common +
        (i === currentNavIndex
          ? `text-sky-700 bg-sky-100 border-b border-b-sky-700`
          : `hover:text-sky-700`)
      );
    },
    navItemText: `tracking-wider`,
    icon: `w-6 h-6 text-slate-500`,
  };

  const handleNavClick = (e: MouseEvent, index: number) => {
    console.log("set current nav index", index);
    if (!navRef.current) return;
    e.preventDefault();
    hideMobileNav(navRef);
    setCurrentNavIndex(() => {
      return index;
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <span className={classes.titleText}>{title}</span>
      </div>
      <IconWrapper onClick={toggleMobileNavContainer} side='left'>
        <HiOutlineMenu className={classes.icon} />
      </IconWrapper>
      <IconWrapper side='right'>
        <HiUser className={classes.icon} />
      </IconWrapper>
      <div ref={navRef} className={classes.navContainer}>
        {navItems.map((item: any, index: number) => (
          <div
            key={index}
            className={classes.buildNavItemContainer(index)}
            onClick={(e: any) => handleNavClick(e, index)}
            onTouchEnd={(e: any) => handleNavClick(e, index)}
          >
            <a href={item.url} className={classes.navItemText}>
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
