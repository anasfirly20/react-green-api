import React, { useEffect, useState } from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

// Api
import greenApi from "../green.api";

// Components
import ChatBoxEmpty from "./ChatBoxEmpty";
import ChatData from "./ChatData";

const ChatBox = ({ selected, setSelected, index }) => {
  const [data, setData] = useState("");

  const getSentMessages = async () => {
    try {
      const res = await greenApi.getOutgoingMessages();
      setData(res?.data?.reverse());
      console.log("REVERSED >>", data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSentMessages();
  }, []);

  return selected === index ? (
    <ChatData data={data} getSentMessages={getSentMessages} />
  ) : (
    <ChatBoxEmpty />
  );
};

export default ChatBox;
