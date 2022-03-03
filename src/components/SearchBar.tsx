import React from "react";
import { HiSearch } from 'react-icons/hi';

export default function SearchBar({
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

  const mcolor = 'sky'
  const classes = {
    container: `my-6 mx-auto w-full max-w-xl flex justify-between items-center bg-white border-2 border-${mcolor}-600 rounded-2xl overflow-hidden`,
    input: `w-full h-10 px-4 flex-auto text-sm focus:outline-none`,
    iconContainer: `w-12 h-12 flex flex-initial justify-center items-center`,
    icon: `h-6 w-6 text-${mcolor}-600`
  }

  return (
    <div className={classes.container}>
      <input
        type="text"
        className={classes.input}
        value={searchText}
        onChange={onChange}
        placeholder="Search"
        onKeyUp={handleKeyUp}
      />
      <div className={classes.iconContainer} onClick={submitSearch}>
        <HiSearch className={classes.icon} />
      </div>
    </div>
  );
}
