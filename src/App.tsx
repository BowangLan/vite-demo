import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import "animate.css";
import PageWrapper from "./components/PageWrapper";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import SearchBar2 from "./components/SearchBar2";
import { HiOutlineHome, HiOutlineMenu, HiSearch, HiUser } from "react-icons/hi";
import { ModalExample1 } from "./components/Modal";
import PageHeader from "./components/PageHeader";
import Sidebar from "./components/Sidebar";

const title = () => {
  return (
    <div className="w-3/5 h-3/5 p-6 my-6 bg-yellow-50 rounded-md  hover:scale-105 ease-out duration-300">
      <h1 className="text-yellow-800 text-2xl font-serif">
        Some Content Title
      </h1>
    </div>
  );
};

const navItems = [
  { name: "Home", url: "home" },
  { name: "About", url: "about" },
  { name: "Card", url: "Card" },
];

const tabs = [
  { icon: HiOutlineHome },
  { icon: HiOutlineMenu },
  { icon: HiUser },
];

function App() {
  const [displayData, setDisplayData] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const bref = useRef<HTMLButtonElement>(null);

  const changeTab = (i: number) => {
    setCurrentTabIndex(i);
  };

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=100";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(() => res.results);
      });
  }, []);

  const a = "jello";

  const onHover = (e: any) => {
    if (bref.current !== null) {
      console.log("on hover");
      bref.current.classList.add(`animate__${a}`);
    }
  };

  const endAnimation = (e: any) => {
    if (bref.current !== null) {
      console.log("end animation, removing animation class");
      bref.current.classList.remove(`animate__${a}`);
    }
  };

  useEffect(() => {
    if (bref.current !== null) {
      console.log("not null bref", bref);
      // bref.current.addEventListener("mouseover", onHover);
      // bref.current.addEventListener("animationend", endAnimation);
    }
  }, [bref]);

  useEffect(() => {
    setDisplayDataFromSearchText();
  }, [data]);

  const setDisplayDataFromSearchText = () => {
    console.log("Set display data from search text:", searchText);
    if (searchText === "") {
      setDisplayData(() => data);
    }
    setDisplayData(() => {
      return data.filter((item: any) =>
        JSON.stringify(item.name).includes(searchText)
      );
    });
  };

  return (
    <>
      <PageWrapper
        tabs={tabs}
        currentTabIndex={currentTabIndex}
        changeTab={changeTab}
      >
        <PageHeader title={"User Shopping"} navItems={navItems} />
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
            ref={bref}
            className="my-2 px-6 py-3 flex justify-center items-center bg-sky-700 text-white font-semibold text-base rounded-xl duration-500 hover:bg-sky-400"
            style={{ animationDuration: "500ms" }}
            onClick={() => setShowModal(true)}
          >
            Open My Modal
          </button>
          <button
            ref={bref}
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
      </PageWrapper>
      <ModalExample1 show={showModal} close={() => setShowModal(false)} />
      <Sidebar show={showSidebar} close={() => setShowSidebar(false)} />
    </>
  );
}

export default App;
