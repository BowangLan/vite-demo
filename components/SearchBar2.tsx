import React from "react";
import { HiSearch } from "react-icons/hi";

export default function SearchBar2({
  searchText,
  setSearchText,
  submitSearch,
}: any) {
  const onChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  const color = "blue-700";
  let classes;
  if (searchText === "") {
    classes = {
      container: `group hover:w-full hover:sm:w-2/3 hover:md:w-1/2 max-w-xl flex justify-between items-center rounded-full hover:rounded-xl border-4 border-blue-700 transition-all duration-500`,
      input: `w-0 group-hover:w-auto px-2 flex-1 bg-transparent text-sm focus:outline-none transition-all duration-500`,
      icon: `w-12 h-12 flex flex-grow-0 flex-shrink-0 justify-center items-center cursor-pointer`,
    };
  } else {
    classes = {
      container: `group w-full sm:w-2/3 md:w-1/2  max-w-xl flex justify-between items-center rounded-xl border-4 border-${color} transition-all duration-500`,
      input: `px-2 flex-1 bg-transparent text-sm focus:outline-none transition-all duration-500`,
      icon: `w-12 h-12 flex flex-none justify-center items-center cursor-pointer`,
    };
  }

  return (
    <div className={classes.container}>
      <input
        type="text"
        className={classes.input}
        style={{ transition: "1.0" }}
        value={searchText}
        onChange={onChange}
        placeholder="Search"
        onKeyUp={handleKeyUp}
      />
      <div className={classes.icon} onClick={submitSearch}>
        <HiSearch className={`h-6 w-6 text-blue-700`} />
      </div>
    </div>
  );
}
