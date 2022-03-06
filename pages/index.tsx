import type { NextPage } from "next";
import { useState, useRef, useEffect, useCallback } from "react";
import { ModalExample1 } from "../components/Modal";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import UserList from "../components/UserList";
// import styles from "../styles/Home.module.css";
import "animate.css";

const Home: NextPage = () => {
  const [displayData, setDisplayData] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=100";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(() => res.results);
      });
  }, []);

  const setDisplayDataFromSearchText = useCallback(() => {
    console.log("Set display data from search text:", searchText);
    if (searchText === "") {
      setDisplayData(() => data);
    }
    setDisplayData(() => {
      return data.filter((item: any) =>
        JSON.stringify(item.name).includes(searchText)
      );
    });
  }, [data, searchText]);

  useEffect(() => {
    setDisplayDataFromSearchText();
  }, [data, setDisplayDataFromSearchText]);

  return (
    <>
      <>
        {/* <PageHeader title={"User Shopping"} navItems={navItems} /> */}
        <div className="mt-4 mx-5 flex justify-center">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            submitSearch={setDisplayDataFromSearchText}
          />
        </div>
        {/* <PostList data={data} /> */}
        <div className="my-4 mx-5 flex flex-col sm:flex-row justify-center gap-0 sm:gap-8">
          <button
            className="my-2 px-6 py-3 flex justify-center items-center bg-sky-700 text-white font-semibold text-base rounded-xl duration-500 hover:bg-sky-400"
            style={{ animationDuration: "500ms" }}
            onClick={() => setShowModal(true)}
          >
            Open My Modal
          </button>
          <button
            className="my-2 px-6 py-3 flex justify-center items-center bg-sky-700 text-white font-semibold text-base rounded-xl duration-500 hover:bg-sky-400"
            style={{ animationDuration: "500ms" }}
            onClick={() => setShowSidebar(true)}
          >
            Open Sidebar
          </button>
        </div>
        <div className="flex flex-col mb-5">
          <UserList data={displayData} />
        </div>
      </>
      <ModalExample1 show={showModal} close={() => setShowModal(false)} />
      <Sidebar show={showSidebar} close={() => setShowSidebar(false)} />
    </>
  );
};

export default Home;
