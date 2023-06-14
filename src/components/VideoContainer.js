import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_APIS } from "../utils/constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_APIS);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="flex p-4 ml-12 my-6 mr-6 flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
