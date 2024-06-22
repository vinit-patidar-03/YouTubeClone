import React, { useContext } from "react";
import UpperMenubar from "../components/UpperMenubar";
import MainPageVideos from "../components/MainPageVideos";
import Context from "../context/Context";
import Spinner from "../components/Spinner";

const Home = () => {
  const { loading } = useContext(Context);
  return (
    <>
      <div className="mt-[calc(60px+3rem)] sm:p-3">
        <UpperMenubar />
        {!loading && <MainPageVideos />}
        {loading && <Spinner />}
      </div>
    </>
  );
};

export default Home;
