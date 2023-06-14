import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/SearchSlice";


const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState([])
  const [showSuggestions , setShowSuggestions] = useState(false)
  const searchCache = useSelector(store=>store.search)
  
  // const getSearchSuggestions = async () => {
  //   const data = await fetch(SEARCH_SUGGESTIONS_API+searchQuery);
  //   const json = await data.json();
    
  //   setSuggestions(json[1])
  // };

  // useEffect(() => {
  //   const timer = setTimeout(()=>{
  //    if(searchCache[searchQuery]) {
  //     setSuggestions(searchCache[searchQuery])
  //   }
  //   else{
  //   getSearchSuggestions()
  //   dispatch(cacheResults({
  //     [searchQuery] : json[1],
  //   }))
  // }
  
  // },200)
  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
  
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
  
    return () => clearTimeout(timer);
  }, [searchQuery]);
  


  //   return ()=>{
  //     clearTimeout(timer)
  //   }
  // }, [searchQuery]);

  

  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col col-span-1 shadow-lg p-2">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandeler()}
          src="https://openclipart.org/image/2000px/221605"
          alt="menu"
          className="h-6 p-1 my-2 mx-5 cursor-pointer"
        />
        <a href="/">
          <img
            src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
            alt="yt-logo"
            className="h-9 my-1 cursor-pointer"
          />
        </a>
      </div>



      <div className="col-span-10">
      <div>
        <input
          className="w-1/2 h-8 ml-28 my-3 border border-gray-600 rounded-l-full pl-3"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        ></input>
        <button className="h-8 border border-gray-600 rounded-r-full bg-gray-50 px-3">
          🔍
        </button>
        </div> 
        {showSuggestions && (<div className="fixed bg-white  px-5 mx-28 rounded-lg w-[34rem]">
        <ul>
        {suggestions.map(s=> <li key={s} className="py-1 hover:bg-gray-100">{s}</li>)}
        </ul>

        </div>)}
        

      </div>



      <div className="col-span-1">
        <a href="#">
          {" "}
          <img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user-icon"
            className="h-9"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Head;
