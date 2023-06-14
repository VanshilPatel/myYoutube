import React from "react";
import { YOUTUBE_VIDEOS_APIS } from "../utils/constants";
import { useEffect, useState } from "react";

const VideoInfo = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [channelLogo, setChannelLogo] = useState("");

  const getVideosInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_APIS);
    const json = await data.json();
    setVideoTitle(json.items[0].snippet.title);
    setChannelTitle(json.items[0].snippet.channelTitle);
    setChannelLogo(json.items[0].snippet.thumbnails.default.url);
  };

  useEffect(() => {
    getVideosInfo();
  }, []);

  return (
    <div className="px-11 my-2 h-28">
      <h1 className="font-bold text-2xl pt-2 w-[55rem]">{videoTitle}</h1>
      <div className="flex pt-3">
        <img className="border rounded-full h-10 w-10 mr-4" src={channelLogo}></img>
        <h1 className="font-bold text-l mr-4 mt-2">{channelTitle}</h1>
        <button className="border border-gray-500 rounded-full px-2 text-sm bg-black text-white">Subscribe</button>
        <div className="ml-72">
        <button className="border border-gray-500 bg-slate-100 mx-3 rounded-full px-3 py-1">Like</button>
        <button className="border border-gray-500 bg-slate-100 mx-3 rounded-full px-3 py-1">Share</button>
        <button className="border border-gray-500 bg-slate-100 mx-3 rounded-full px-3 py-1">Download</button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
