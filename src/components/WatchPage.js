import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat"

const WatchPage = () => {

    const [searchParams] = useSearchParams()
    searchParams.get("v")


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
  <div className="flex flex-col">
  <div className="flex">
   <div className="pt-9 px-11">
    <iframe width="900" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
  <div>
    <LiveChat/>
  </div>
  </div>
  <VideoInfo/>
  <CommentContainer/>


 </div>
  )
  
};

export default WatchPage;
