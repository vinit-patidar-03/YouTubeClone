import React, { useContext } from "react";
import UpperMenubar from "../components/UpperMenubar";
import MainPageVideos from "../components/MainPageVideos";
import Context from "../context/Context";
import Spinner from "../components/Spinner";

const Home = () => {
  const { loading } = useContext(Context);
  return (
    <>
      <div className="relative top-[calc(60px+3rem)] p-3 homepage">
        <UpperMenubar />
        {!loading && <MainPageVideos />}
        {loading && <Spinner />}
      </div>
    </>
  );
};

export default Home;
