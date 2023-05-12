import React, { useState } from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

// Icons
import { Icon } from "@iconify/react";

// Components
import ChatBoxEmpty from "./ChatBoxEmpty";
import ChatData from "./ChatData";

const ChatBox = ({ selected, setSelected, index }) => {
  const [data, setData] = useState("");

  return selected === index ? <ChatData /> : <ChatBoxEmpty />;
};

export default ChatBox;
