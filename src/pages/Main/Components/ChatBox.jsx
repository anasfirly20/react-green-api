import React, { useEffect, useState } from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

// Api
import greenApi from "../green.api";

// Components
import ChatBoxEmpty from "./ChatBoxEmpty";
import ChatData from "./ChatData";

const ChatBox = ({ selected, setSelected, index, data, getSentMessages }) => {
  return selected === index ? (
    <ChatData data={data} getSentMessages={getSentMessages} />
  ) : (
    <ChatBoxEmpty />
  );
};

export default ChatBox;
