import React, { useState } from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

// Icons
import { Icon } from "@iconify/react";

// Components
import ChatBoxEmpty from "./ChatBoxEmpty";

const ChatBox = () => {
  const [data, setData] = useState([]);

  return data.length ? <h1>{data}</h1> : <ChatBoxEmpty />;
};

export default ChatBox;
