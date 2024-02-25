import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

const VideoCard = (props) => {
  const Navigate = useNavigate();
  const { video } = props;
  const { theme } = useContext(Context);

  const Render = () => {
    Navigate(`/video/${video.videoId}/${video.channelId}`);
  };

  const gotoChannel = () => {
    Navigate(`/channelDetails/${video.channelId}`);
  };

  const ViewConverter = (views) => {
    let count = 0;
    let originalCount = views;
    while (views !== 0) {
      count++;
      views = parseInt(views / 10);
    }

    if (count - 1 === 4 || count - 1 === 3) {
      return (originalCount / Math.pow(10, 3)).toString().slice(0, 4) + "K";
    } else if (count - 1 === 5) {
      return (originalCount / Math.pow(10, 5)).toString().slice(0, 4) + "lakh";
    } else if (count - 1 >= 6) {
      return (originalCount / Math.pow(10, 6)).toString().slice(0, 4) + "M";
    } else {
      return originalCount;
    }
  };

  return (
    <>
      <div className="mx-2 my-4 w-[330px] mainpage-Card">
        <div className="flex flex-col">
          <div className="w-full relative">
            <img
              src={video?.thumbnail[0]?.url}
              className="w-full rounded-xl object-cover mainpage-thumbnail cursor-pointer"
              onClick={Render}
              alt="logo"
            />
            <div className="text-white text-center absolute right-2 bottom-2">
              <h5
                className={`${
                  video.lengthText === "LIVE" ? "bg-red-600" : "bg-black"
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
          <div
            className={`flex px-3 my-2 text-${
              theme === "light" ? "black" : "white"
            }`}
          >
            {video.channelThumbnail && (
              <img
                src={video.channelThumbnail[0].url}
                className="rounded-full self-start mainpage-channelThumbnail"
                alt=""
              />
            )}
            <div className="mx-3">
              <h4 className="leading-5 font-bold text-sm mainpage-title">
                {video?.title}
              </h4>
              <div className="my-1 text-gray-00">
                <div className="flex sm:text-xs mainpage-channelTitle">
                  <h4
                    className="font-semibold cursor-pointer"
                    onClick={gotoChannel}
                  >
                    {video.channelTitle}{" "}
                  </h4>
                  <img
                    src="./images/verify.png"
                    className="self-center mx-2 w-3"
                    alt="verify"
                  />
                </div>
                <div className="mt-1">
                  {video.isLive ? (
                    <img src="/images/live.png" className="w-4" alt="live" />
                  ) : (
                    <h4 className="mainpage-channelTitle sm:text-xs">
                      {ViewConverter(video.viewCount)} •{" "}
                      {video.publishedTimeText}{" "}
                    </h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
