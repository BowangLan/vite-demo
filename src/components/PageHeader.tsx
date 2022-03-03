import { useState } from "react";

export default function PageHeader({ title, navItems }: any) {
  const [currentNavIndex, setCurrentNavIndex] = useState(0);

  let classes = {
    container: `w-full h-12 xl:h-16 flex justify-between items-stretch bg-white`,
    titleContainer: `ml-4 flex items-center`,
    titleText: `text-md font-medium tracking-wider`,
    navContainer: `mx-4 flex gap-0 justify-center items-stretch`,

    buildNavItemContainer: (i: number) => {
      const common = `px-6 flex justify-center items-center hover:bg-sky-100 transition-all duration-300 cursor-pointer `;
      return (
        common +
        (i === currentNavIndex
          ? `text-sky-700 border-b border-b-sky-700`
          : `hover:text-sky-700`)
      );
    },
    navItemText: `tracking-wider`,
  };

  const handleNavClick = (e: MouseEvent, index: number) => {
    console.log("set current nav index", index);
    e.preventDefault();
    setCurrentNavIndex(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <span className={classes.titleText}>{title}</span>
      </div>
      <div className={classes.navContainer}>
        {navItems.map((item: any, index: number) => (
          <div
            key={index}
            className={classes.buildNavItemContainer(index)}
            onClick={(e: any) => handleNavClick(e, index)}
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
