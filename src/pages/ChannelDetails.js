/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import Context from "../context/Context";
import ChannelVideos from "../components/ChannelVideos";
import { useParams } from "react-router-dom";
import { fetchData } from "../API/YoutubeAPI";
import PlaylistCard from "../components/PlaylistCard";
import Channels from "../components/Channels";
import ShortsCard from "../components/ShortsCard";
import Spinner from "../components/Spinner";

const ChannelDetails = () => {
  const { cid } = useParams();
  const [playlist, setPlaylist] = useState("");
  const [active, setActive] = useState("#Live");
  const [videopage, setVideoPage] = useState(0);
  const [playlistpage, setPlaylistPage] = useState(0);
  const [channelVideos, setChannelVideos] = useState("");
  const { channel, setChannel, theme, setShortsCategory, setCid } =
    useContext(Context);

  useEffect(() => {
    fetchChannel(cid);
    moveTotop();
    setCid(cid);
    setShortsCategory(cid);
    fetchMoreChannelVideos(cid);
    fetchMoreChannelplaylists(cid);
  }, [cid]);

  const fetchChannel = (id) => {
    fetchData(`channel/home?id=${id}`).then((res) => {
      setChannel(res.data);
    });
  };

  const moveTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ChangePage = (event, type) => {
    if (
      event === "incr" &&
      videopage !==
        channel.data.filter((elem) => {
          return (
            elem.type === "video_listing" && elem.title.split(" ")[1] !== "live"
          );
        }).length -
          1 &&
      type === "video"
    ) {
      setVideoPage(videopage + 1);
    } else if (event === "decr" && videopage !== 0 && type === "video") {
      setVideoPage(videopage - 1);
    } else if (
      event === "incr" &&
      playlistpage !== playlist.length - 1 &&
      type === "playlist"
    ) {
      setPlaylistPage(playlistpage + 1);
    } else if (event === "decr" && playlistpage !== 0 && type === "playlist") {
      setPlaylistPage(playlistpage - 1);
    }
  };

  const fetchMoreChannelVideos = (id) => {
    fetchData(`channel/videos?id=${id}`).then((res) => {
      setChannelVideos(res.data.data);
    });
  };

  const fetchMoreChannelplaylists = (id) => {
    fetchData(`channel/playlists?id=${id}`).then((res) => {
      setPlaylist(res.data.data);
    });
  };

  return (
    <>
      {channel && (
        <div
          className={`mb-[50px] text-${theme === "light" ? "black" : "white"}`}
          id="top"
        >
          <div className="mt-[60px]">
            {channel.meta.banner && (
              <img
                src={channel.meta.banner[1].url}
                className="w-full"
                alt="banner"
              />
            )}
          </div>

          <div className="flex my-2 ml-5">
            <div className="flex">
              <img
                src={channel.meta.avatar[0].url}
                className="rounded-full ChannelDetailpageAvatar"
                alt="avatar"
              />
            </div>
            <div className="ml-5 mt-3">
              <div className="flex items-center">
                <h3 className="font-bold">{channel.meta.title}</h3>
                <img
                  src="/images/verify.png"
                  className="w-5 ml-2"
                  alt="verify"
                />
              </div>
              <div className="flex ChannelDetailpageText">
                <h5>{channel.meta.channelHandle}</h5>
                <h5 className="ml-3">
                  {channel.meta.subscriberCountText} subscribers
                </h5>
                <h5 className="ml-3">{channel.meta.videosCount} videos</h5>
              </div>
              <div className="mt-2 text-xs">
                <p>{channel.meta.description.split(" ")[0]}...</p>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <ul className="flex justify-evenly">
              <li className="cursor-pointer font-semibold">
                <button
                  onClick={() => setActive("#Live")}
                  className={`${
                    active === "#Live" ? "underline underline-offset-4" : ""
                  }`}
                >
                  Live
                </button>
              </li>
              <li className="cursor-pointer font-semibold">
                <button
                  className={`${
                    active === "#Videos" ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setActive("#Videos")}
                >
                  Videos
                </button>
              </li>
              <li className="cursor-pointer font-semibold">
                <button
                  className={`${
                    active === "#Playlist" ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setActive("#Playlist")}
                >
                  Playlists
                </button>
              </li>
              <li className="cursor-pointer font-semibold">
                <button
                  className={`${
                    active === "#Shorts" ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setActive("#Shorts")}
                >
                  Shorts
                </button>
              </li>
              <li className="cursor-pointer font-semibold">
                <button
                  className={`${
                    active === "#Channels" ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setActive("#Channels")}
                >
                  Channels
                </button>
              </li>
            </ul>
          </div>

          <hr />

          <main className="relative">
            <section
              id="Live"
              className={`pb-[60px] ${active === "#Live" ? "block" : "hidden"}`}
            >
              <div className="flex flex-wrap justify-center my-5">
                {channel.data.filter((elem) => {
                  return (
                    elem.type === "video_listing" &&
                    elem.title.split(" ")[1] === "live"
                  );
                }).length !== 0 &&
                  channel.data
                    .filter((elem) => {
                      return (
                        elem.type === "video_listing" &&
                        elem.title.split(" ")[1] === "live"
                      );
                    })[0]
                    .data.map((elem, index) => {
                      return (
                        <ChannelVideos video={elem} key={index} cid={cid} />
                      );
                    })}
                {channel.data.filter((elem) => {
                  return (
                    elem.type === "video_listing" &&
                    elem.title.split(" ")[1] === "live"
                  );
                }).length === 0 && (
                  <h1 className="text-center text-xl w-[100vw] font-semibold">
                    No Live Videos
                  </h1>
                )}
              </div>
            </section>

            <section
              id="Videos"
              className={` absolute top-0 py-[60px] ${
                active === "#Videos" ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-wrap justify-center my-5">
                {channelVideos.length !== 0 &&
                  channelVideos.map((elem, index) => {
                    return <ChannelVideos video={elem} key={index} cid={cid} />;
                  })}
                {channelVideos.length === 0 && (
                  <h1 className="text-center text-xl w-[100vw] font-semibold">
                    No Videos
                  </h1>
                )}
              </div>
            </section>

            <section
              id="Playlist"
              className={` absolute top-0 py-[60px] ${
                active === "#Playlist" ? "block" : "hidden"
              }`}
            >
              {playlist.length === 0 && (
                <h1 className="text-center text-xl w-[100vw] font-semibold">
                  No Plylists
                </h1>
              )}
              {playlist.length !== 0 &&
              playlist[playlistpage].type === "playlist_listing" ? (
                <div>
                  <div className="flex flex-wrap justify-center my-5">
                    {playlist[playlistpage].type === "playlist_listing"
                      ? playlist[playlistpage].data.map((elem, index) => {
                          return (
                            <PlaylistCard video={elem} key={index} cid={cid} />
                          );
                        })
                      : ""}
                  </div>

                  <div className="flex justify-evenly">
                    <button
                      onClick={() => {
                        ChangePage("decr", "playlist");
                      }}
                      className={`py-2 px-5 text-${
                        theme === " light" ? "black" : "white"
                      } rounded-full font-semibold`}
                    >
                      <GrFormPrevious />
                    </button>
                    <button
                      onClick={() => {
                        ChangePage("incr", "playlist");
                      }}
                      className={`py-2 px-5 text-${
                        theme === " light" ? "black" : "white"
                      } rounded-full font-semibold`}
                    >
                      <GrFormNext />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center my-5">
                  {playlist.length !== 0 &&
                    playlist.map((elem, index) => {
                      return (
                        <PlaylistCard video={elem} key={index} cid={cid} />
                      );
                    })}
                </div>
              )}
            </section>

            <section
              id="Shorts"
              className={` absolute top-0 py-[60px] ${
                active === "#Shorts" ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-wrap justify-center my-5">
                {channel.data.filter((elem) => {
                  return elem.type === "shorts_listing";
                }).length !== 0 &&
                  channel.data
                    .filter((elem) => {
                      return elem.type === "shorts_listing";
                    })[0]
                    .data.map((elem, index) => {
                      return <ShortsCard video={elem} key={index} cid={cid} />;
                    })}
                {channel.data.filter((elem) => {
                  return elem.type === "shorts_listing";
                }).length === 0 && (
                  <h1 className="text-center text-xl w-[100vw] font-semibold">
                    No Shorts Posted
                  </h1>
                )}
              </div>
            </section>

            <section
              id="Channels"
              className={` absolute top-0 py-[60px] ${
                active === "#Channels" ? "block" : "hidden"
              }`}
            >
              <div>
                <div className="flex justify-center flex-wrap">
                  {channel.data.filter((elem) => {
                    return elem.type === "channel_listing";
                  }).length !== 0 &&
                    channel.data
                      .filter((elem) => {
                        return elem.type === "channel_listing";
                      })[0]
                      .data.map((elem, index) => {
                        return <Channels video={elem} key={index} />;
                      })}
                  {channel.data.filter((elem) => {
                    return elem.type === "channel_listing";
                  }).length === 0 && (
                    <h1 className="text-center text-xl w-[100vw] font-semibold">
                      No Other Channel
                    </h1>
                  )}
                </div>
                <div></div>
              </div>
            </section>
          </main>
          <div
            className={`fixed right-[10px] bottom-[50px] cursor-pointer flex justify-center items-center rounded-full w-10 h-10 bg-${
              theme === "light" ? "white" : "black"
            }`}
            onClick={moveTotop}
          >
            <i className="fa-solid fa-arrow-up fa-xl"></i>
          </div>
        </div>
      )}
      {!channel && <Spinner />}
    </>
  );
};

export default ChannelDetails;
