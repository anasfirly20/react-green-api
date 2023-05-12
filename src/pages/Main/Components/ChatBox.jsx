import React, { useState } from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

// Icons
import { Icon } from "@iconify/react";

// Components
import ChatBoxEmpty from "./ChatBoxEmpty";

const ChatBox = ({ selected, setSelected }) => {
  const [data, setData] = useState("");

  return selected ? <h1>DATA IS HERE</h1> : <ChatBoxEmpty />;
};

export default ChatBox;
