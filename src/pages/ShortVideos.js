/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";
import { fetchData } from "../API/YoutubeAPI";
import Spinner from "../components/Spinner";

const ShortVideos = () => {
  const { id, cid } = useParams();
  const location = useLocation();
  const { shortscategory } = useContext(Context);
  const [shorts, setShorts] = useState("");
  const [shortNo, setShortNo] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchshortsData();
    setShortNo(0);
  }, [location]);

  const fetchshortsData = () => {
    if (cid !== shortscategory && id === ":id") {
      fetchData(`search?query=${shortscategory}`).then((res) => {
        setShorts(
          res.data.data.filter((elem) => {
            return elem.type === "shorts_listing";
          })[0].data
        );
      });
    } else if (shortscategory === cid && id === ":id") {
      fetchData(`channel/shorts?id=${shortscategory}`).then((res) => {
        setShorts(res.data.data);
      });
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  };

  const changeShortPage = (e) => {
    if (e === "incr" && shortNo !== shorts.length - 1) {
      setShortNo(shortNo + 1);
    } else if (e === "decr" && shortNo !== 0) {
      setShortNo(shortNo - 1);
    } else if (e === "incr" && shortNo === shorts.length - 1) {
      setShortNo(0);
    } else if (e === "decr" && shortNo === 0) {
      setShortNo(shorts.length - 1);
    }
  };
  return (
    <>
      {shorts.length !== 0 ? (
        <div className="flex justify-center items-center h-[100vh] relative">
          <div className="relative flex justify-center items-center p-3 rounded-xl h-[calc(100vh-160px)] w-[calc(0.5625*(100vh-140px))]">
            <div className=" w-full h-full shortPlayer">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${shorts[shortNo].videoId}`}
                playing={true}
                loop={true}
                width="100%"
                height="100%"
              />
            </div>
            <div className=" absolute mx-2 flex justify-between w-[95%]">
              <div
                className="rounded-full mr-3 cursor-pointer"
                onClick={() => {
                  changeShortPage("decr");
                }}
              >
                <i className="fa-sharp fa-solid fa-arrow-right fa-flip-horizontal fa-2xl text-white py-4 px-1"></i>
              </div>
              <div
                className="rounded-full ml-3 cursor-pointer "
                onClick={() => {
                  changeShortPage("incr");
                }}
              >
                <i className="fa-sharp fa-solid fa-arrow-right fa-2xl text-white py-4 px-1"></i>
              </div>
            </div>
            <div className="absolute bottom-5 shortDetails ml-3 w-[95%]">
              <p className="text-white font-bold text-sm">
                {shorts[shortNo].title}
              </p>
              <p className="text-white text-xs">
                {shorts[shortNo].viewCountText}
              </p>
            </div>
          </div>
        </div>
      ) :
        loading ? <Spinner /> : <h1 className=" mt-20 font-bold text-lg text-center">No Shorts Posted</h1>
      }

      {id !== ":id" && (
        <div className="flex justify-center items-center h-[100vh] relative">
          <div className="relative flex justify-center items-center p-3 rounded-xl h-[calc(100vh-160px)] w-[calc(0.5625*(100vh-140px))]">
            <div className=" w-full h-full shortPlayer">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}}`}
                playing={true}
                loop={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShortVideos;
