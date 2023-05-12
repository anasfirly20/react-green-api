import React from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

const ChatBox = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-customWhite">
      <img src={svgConnect} alt="Whatsapp" />
      <h1 className="text-3xl">Whatsapp Web</h1>
      <p className="mt-5 text-sm">
        Send and receive messages without keeping your phone online.
      </p>
      <p className="text-sm">
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </p>
    </div>
  );
};

export default ChatBox;
