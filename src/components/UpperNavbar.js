import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosAddCircle, IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBell, FaMicrophone } from "react-icons/fa6";

const UpperNavbar = () => {
  const { setSearchcategory, theme } = useContext(Context);
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();
  const location = useLocation();
  useEffect(() => { }, [location]);

  const setCategory = (event) => {
    setSearch(event.target.value);
  };

  const searchResults = (event) => {
    if (search.length !== 0) {
      setSearchcategory(search);
      Navigate(`/searchResults/${search}`);
    }
  };

  const searchEnter = (event) => {
    if (event.key === "Enter" && search.length !== 0) {
      setSearchcategory(search);
      Navigate(`/searchResults/${search}`);
    }
  };

  return (
    <>
      <nav
        className={`flex justify-center ${theme === "light" ? "bg-white" : "bg-black"
          } fixed ${theme === "light" ? "text-black" : "text-white"
          } top-0 items-center h-[60px] w-full z-10`}
      >
        <ul className=" w-full flex justify-between">
          <li className="flex items-center justify-center">
            <div className=" flex justify-center items-center mx-3">
              <img
                src="/images/youtube.webp"
                className="w-[75px] h-auto cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
                alt="Youtube"
              />
            </div>
          </li>

          <li className="flex items-center justify-center">
            <div className="flex justify-center items-center">
              <input
                type="text"
                name="search"
                id="search"
                className={`rounded-l-full cursor-text text-black ${theme === "light" ? "bg-slate-200" : "bg-gray-200"
                  } lg:w-[600px] md:w-[400px] sm:w-[300px] w-[150px] px-[20px] py-[5px]`}
                placeholder="search video..."
                onKeyUp={searchEnter}
                onChange={setCategory}
                value={search}
                autoComplete="off"
              />
              <div
                id="serchButton"
                className="flex justify-center items-center w-[40px] h-[35px] bg-slate-400 rounded-r-full cursor-pointer"
                onClick={searchResults}
              >
                <IoMdSearch className="text-2xl" />
              </div>
              <FaMicrophone className="mx-3 sm:block hidden text-2xl" />
            </div>
          </li>

          <li className="flex items-center justify-center mx-3">
            <div className="flex justify-center items-center">
              <IoIosAddCircle className="mx-2 cursor-pointer sm:block hidden text-xl" />
              <FaBell className="mx-2 cursor-pointer sm:block hidden text-xl" />
              <div
                className="w-8 h-8 rounded-full flex justify-center items-center mx-3 cursor-pointer"
                title="Account"
              >
                <FaRegUserCircle className="text-3xl" />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UpperNavbar;
