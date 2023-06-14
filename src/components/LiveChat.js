import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const data = [];

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  //API polling logic
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="border border-gray-300 rounded-xl w-96 h-[500px] mt-2 px-4">
        <h1 className="mt-3 font-medium text-xl">Live Chat</h1>
        <hr></hr>
        <div className=" w-96 h-[445px] mt-2 overflow-y-scroll flex flex-col-reverse">
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="mt-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vanshil",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-gray-300 rounded-md w-80 pl-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="ml-4 bg-green-300 border rounded-md px-1">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
