/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../API/YoutubeAPI";
import PlaylistVideoCard from "../components/PlaylistVideoCard";
import Context from "../context/Context";
import Spinner from "../components/Spinner";

const PlaylistDetails = (props) => {
  const { pid } = useParams();
  const { theme } = useContext(Context);
  const [channelPlaylistsVideos, setChannelPlaylistsVideos] = useState();
  useEffect(() => {
    fetchPlaylistVideos();
  }, []);

  const fetchPlaylistVideos = () => {
    fetchData(`playlist?id=${pid}`).then((res) => {
      setChannelPlaylistsVideos(res.data);
    });
  };
  return (
    <>
      {channelPlaylistsVideos ? (
        <div className="mb-[50px]">
          <div className="flex justify-center">
            {channelPlaylistsVideos && (
              <div
                className={`mt-[80px] rounded-lg w-[95%] m-3 flex flex-wrap md:flex-nowrap text-${
                  theme === "light" ? "black" : "white"
                }`}
                style={{
                  backgroundColor: `${
                    theme === "light" ? "#FFFBF5" : "#141414"
                  }`,
                }}
              >
                <div className="w-full md:w-[50%] lg:w-[30%] relative">
                  <img
                    src={
                      channelPlaylistsVideos.meta.thumbnail[3].url ||
                      channelPlaylistsVideos.meta.thumbnail[0].url
                    }
                    className=" w-full"
                    alt="thumbnail"
                  />
                  <div className="absolute right-2 bottom-2">
                    <img
                      src="/images/playlist.png"
                      className="w-7"
                      alt="playlist"
                    />
                  </div>
                </div>
                <div className="md:ml-3 ">
                  <h1 className="font-bold text-lg">
                    {channelPlaylistsVideos.meta.title}
                  </h1>
                  <h3 className="font-semibold mt-2 text-sm">
                    {channelPlaylistsVideos.meta.channelTitle}
                  </h3>
                  <div className="flex mt-3">
                    <h5 className="text-xs">
                      {channelPlaylistsVideos.meta.videoCountText}
                    </h5>
                    <h5 className="text-xs ml-3">
                      {channelPlaylistsVideos.meta.viewCountText}
                    </h5>
                    <h5 className="text-xs ml-3">
                      {channelPlaylistsVideos.meta.lastUpdated}
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>

          <hr className="my-3 bg-black" />

          <div className="flex flex-wrap justify-center">
            {channelPlaylistsVideos &&
              channelPlaylistsVideos.data.map((elem, index) => {
                return <PlaylistVideoCard video={elem} key={index} />;
              })}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PlaylistDetails;
