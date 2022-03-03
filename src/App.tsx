import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import SearchBar2 from "./components/SearchBar2";
import { HiSearch } from "react-icons/hi";
import Modal from "./components/Modal";
import PageHeader from "./components/PageHeader";

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
  { name: "List", url: "list" },
];

function App() {
  const [displayData, setDisplayData] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=100";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(() => res.results);
      });
  }, []);

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

  const openModal = () => {
    setShowModal(() => true);
  };

  const closeModal = () => {
    setShowModal(() => false);
  };

  return (
    <>
      <PageWrapper>
        <PageHeader
          title={"User Shopping"}
          navItems={navItems}
        />
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          submitSearch={setDisplayDataFromSearchText}
        />
        {/* <PostList data={data} /> */}
        <button
          className="my-4 px-6 py-3 flex justify-center items-center bg-sky-700 text-white font-semibold text-base rounded-xl"
          onClick={openModal}
        >
          Open My Modal
        </button>
        <UserList data={displayData} />
      </PageWrapper>
      <Modal show={showModal} close={closeModal} />
    </>
  );
}

export default App;
