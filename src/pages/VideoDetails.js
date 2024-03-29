import React, { useContext, useState, useEffect } from "react";
import Video from "../components/Video";
import SuggestVideo from "../components/SuggestedVideos";
import { useParams } from "react-router-dom";
import Context from "../context/Context";
import Spinner from "../components/Spinner";

const VideoDetails = () => {
  const { theme } = useContext(Context);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    moveTotop();
  }, [id]);

  const moveTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center relative top-[60px] videoDetailpage">
      <Video />
      <SuggestVideo setLoading={setLoading} />
      <div
        className={`fixed right-[10px] bottom-[50px] cursor-pointer flex justify-center items-center rounded-full w-10 h-10 bg-${
          theme === "light" ? "white" : "black"
        } text-${theme === "light" ? "black" : "white"}`}
        onClick={moveTotop}
      >
        <i className="fa-solid fa-arrow-up fa-xl"></i>
      </div>
      {loading && <Spinner />}
    </div>
  );
};

export default VideoDetails;
