import React, { useState } from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

// Icons
import { Icon } from "@iconify/react";

// Components
import ChatBoxEmpty from "./ChatBoxEmpty";
import ChatBoxUser from "./ChatBoxUSer";

const ChatBox = ({ selected, setSelected }) => {
  const [data, setData] = useState("");

  return selected ? <ChatBoxUser /> : <ChatBoxEmpty />;
};

export default ChatBox;
