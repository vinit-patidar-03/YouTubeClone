import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../API/YoutubeAPI";
import SuggestVideoCard from "./SuggestVideoCard";

const SuggestVideo = ({ setLoading }) => {
  const { id } = useParams();
  const [related, setRelated] = useState("");

  const fetchRelatedContent = useCallback(
    (Id) => {
      fetchData(`related?id=${Id}`).then((res) => {
        setRelated(res.data.data);
        setLoading(false);
      });
    },
    [setLoading]
  );

  useEffect(() => {
    fetchRelatedContent(id);
  }, [fetchRelatedContent, id]);

  return (
    <>
      <div className="suggestVideopage scroll-track mt-0">
        {related.length !== 0 &&
          related.map((elem, index) => {
            if (elem.type !== "video") {
              return false;
            }
            return <SuggestVideoCard video={elem} key={index} />;
          })}
      </div>
    </>
  );
};

export default SuggestVideo;
