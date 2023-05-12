import React from "react";

// Assets
import svgConnect from "../assets/connect-svg.svg";

// Icons
import { Icon } from "@iconify/react";

const ChatBox = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center text-customWhite border-b-[6px] border-b-customTealGreen">
      <div className="flex flex-col items-center my-auto">
        <img src={svgConnect} alt="Whatsapp" />
        <h1 className="text-3xl text-customHeader">WhatsApp Web</h1>
        <p className="mt-5 text-sm text-customText">
          Send and receive messages without keeping your phone online.
        </p>
        <p className="text-sm text-customText">
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </p>
      </div>
      <div className="flex justify-center items-center gap-1 text-customText mb-5">
        <p className="text-sm">
          <Icon icon="material-symbols:lock" className="hover:cursor-pointer" />
        </p>
        <p className="text-sm">End-to-end encrypted</p>
      </div>
    </div>
  );
};

export default ChatBox;
