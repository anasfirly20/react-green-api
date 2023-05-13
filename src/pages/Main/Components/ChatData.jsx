import React, { useEffect, useState } from "react";
import { userData } from "../constants/userData";

// Icons
import { Icon } from "@iconify/react";

// Assets
import degaultBg from "../../../assets/wa-bg-darkmode.jpg";

// Components
import ScrollToBottom from "../../../Components/LoadToBottom";
import ScrollToTop from "../../../Components/LoadToTop";

const icons = [
  {
    icon: "material-symbols:search",
  },
  {
    icon: "ic:outline-more-vert",
  },
];

const iconsBottom = [
  {
    icon: "ic:outline-emoji-emotions",
  },
  {
    icon: "material-symbols:attach-file",
  },
];

const ChatData = () => {
  const [data, setData] = useState("");

  const handleSend = () => {
    console.log("SENT DATA >>", data);
    setData("");
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="bg-[#212e35] p-shorter4 flex justify-between items-center h-[7%]">
          <div className="flex gap-6">
            <p className="text-customWhite text-5xl">
              <Icon icon="mdi:person-circle" className="hover:cursor-pointer" />
            </p>
            <div className="flex flex-col text-customText">
              <h3 className="text-customWhite font-medium">USER'S NAME</h3>
              <p className="text-sm">click here for contact info</p>
            </div>
          </div>
          <div className="flex gap-6">
            {icons.map((e, index) => (
              <p key={index} className="text-customWhite text-2xl">
                <Icon icon={e?.icon} className="hover:cursor-pointer" />
              </p>
            ))}
          </div>
        </div>

        {/* CHAT BUBBLE START */}
        <div
          style={{ backgroundImage: `url(${degaultBg})` }}
          className="h-[86%] overflow-y-scroll"
        >
          <div className="chat chat-start gap-1 px-shorter2">
            {Array(30)
              .fill(null)
              .map((e) => (
                <div className="chat-bubble bg-[#212e35]">
                  It's over Anakin, <br />I have the high ground.
                </div>
              ))}
          </div>
          <div className="chat chat-end gap-1 px-shorter2">
            <div className="chat-bubble bg-customTealGreenDark">
              You underestimate my power!
            </div>
          </div>
        </div>
        {/* CHAT BUBBLE END */}
        <div className="h-[7%] bg-[#212e35] p-shorter4 flex gap-3 items-center">
          {iconsBottom.map((e, index) => (
            <p
              key={index}
              className={`text-customText text-3xl ${
                e?.icon.includes("attach-file") && "rotate-45"
              }`}
            >
              <Icon icon={e?.icon} className="hover:cursor-pointer" />
            </p>
          ))}
          <input
            type="text"
            placeholder="Type a message"
            className="outline-none w-full rounded-md px-3 py-2 text-base text-customWhite bg-[#2a3942]"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <p className="text-customText text-3xl">
            <Icon
              icon={data ? "ic:sharp-send" : "mdi:microphone"}
              className="hover:cursor-pointer"
              onClick={data ? handleSend : () => console.log("MIC ACTION")}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatData;
