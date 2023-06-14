import React, { useEffect } from "react";

const VideoCard = ({ info }) => {
  const {snippet , statistics} = info
  const {channelTitle, title, thumbnails} = snippet


  return( 
  <div className="w-[23rem] h-72 mx-2 px-2 my-2">
      <img className = "border rounded-3xl w-[23rem] h-48" src = {thumbnails.medium.url} />
      <ul>
        <li className="font-bold w-[23rem]">{title}</li>
        <li className="">{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
  </div>
  )
};

export default VideoCard;
