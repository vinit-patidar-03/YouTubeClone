import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
const PlaylistVideoCard = (props) => {
  const { video } = props;
  const Navigate = useNavigate();
  const { theme } = useContext(Context);
  const Render = () => {
    Navigate(`/video/${video.videoId}/${video.channelId}`);
  };
  return (
    <>
      <div
        className={`flex flex-col md:w-[calc(33.33%-0.333rem)] lg:w-[calc(25%-0.375rem)] sm:w-[calc(50%-0.25rem)] w-full text-${theme === "light" ? "black" : "white"
          }`}
      >
        <div className="w-full relative">
          <img
            src={video?.thumbnail[2]?.url || video?.thumbnail[0]?.url}
            onClick={Render}
            className="w-full sm:rounded-xl object-cover cursor-pointer"
            alt="logo"
          />
          <div className="text-white text-center absolute right-2 bottom-2">
            <h5
              className={`${video.lengthText === "LIVE" ? "bg-red-600" : "bg-black"
                } px-1  rounded-[7px] text-xs`}
            >
              {video.isLive ? (
                <p> • {video.lengthText}</p>
              ) : (
                <p>{video.lengthText}</p>
              )}
            </h5>
          </div>
        </div>
        <div className="flex m-1 text-xs md:text-sm">
          <div>
            <h4 className="leading-5 font-bold">
              {video?.title}
            </h4>
            <div className="my-1">
              <div className="flex ">
                <h4 className="font-semibold">{video.channelTitle} </h4>
                <img
                  src="/images/verify.webp"
                  className="self-center mx-2 w-3"
                  alt="verify"
                />
              </div>
              <div className="mt-1">
                {video.isLive ? (
                  <img src="/images/live.png" className="w-4" alt="live" />
                ) : (
                  <h4>
                    {video.viewCountText} • {video.publishedTimeText}{" "}
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistVideoCard;
