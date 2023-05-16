import React, { useEffect, useState, useRef } from "react";

// Icons
import { Icon } from "@iconify/react";

// Assets
import degaultBg from "../../../assets/wa-bg-darkmode.jpg";

// Api
import greenApi from "../green.api";

// Constants
import { iconsBottomChatData, iconsChatData } from "../constants/userData";

// Utils
import {
  getTelephone,
  enterKeyDown,
  timestampToDate,
  timestampToTime,
} from "../../../../utils";

// Miscellaneous
import { toast } from "react-hot-toast";

const ChatData = ({ data, getSentMessages }) => {
  const telephoneStorage = getTelephone();
  const [message, setMessage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState();
  const [mergedMessages, setMergedMessages] = useState([]);

  const sendText = async () => {
    try {
      if (message) {
        await greenApi.sendText({
          chatId: `${telephoneStorage}@c.us`,
          message: message,
        });
        setMessage("");
        getSentMessages();
      }
    } catch (err) {
      if (err?.message === "Network Error") {
        toast.error("Invalid green api user data");
      } else {
        toast.error(err?.message);
      }
      console.log(err);
      toast.error(err);
    }
  };

  // SCROLL START
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
    getIncomingMessages();
  }, []);
  // SCROLL END

  const getIncomingMessages = async () => {
    try {
      const res = await greenApi.getIncomingMessages();
      const filteredData = res?.data?.filter((e) =>
        e?.senderId?.includes(telephoneStorage)
      );
      setIncomingMessages(filteredData?.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Merge the data and incomingMessages arrays
    let merged = data;
    if (Array.isArray(incomingMessages)) {
      merged = [...data, ...incomingMessages];
    }
    setMergedMessages(merged);
    // console.log("MERGED >", mergedMessages);
  }, [data, incomingMessages]);

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="bg-[#212e35] p-shorter4 flex justify-between items-center h-[7%]">
          <div className="flex gap-6">
            <p className="text-customWhite text-5xl">
              <Icon icon="mdi:person-circle" className="hover:cursor-pointer" />
            </p>
            <div className="flex flex-col text-customText">
              <h3 className="text-customWhite font-medium">
                +{telephoneStorage}
              </h3>
              <p className="text-sm">click here for contact info</p>
            </div>
          </div>
          <div className="flex gap-6">
            {iconsChatData.map((e, index) => (
              <p key={index} className="text-customWhite text-2xl">
                <Icon icon={e?.icon} className="hover:cursor-pointer" />
              </p>
            ))}
          </div>
        </div>

        {/* CHAT BUBBLE START */}
        <div
          style={{ backgroundImage: `url(${degaultBg})` }}
          className="h-[86%] overflow-y-scroll scrollbar-thin scrollbar-track-[#111b21] scrollbar-thumb-[#212e35]"
        >
          {mergedMessages
            ?.sort((a, b) => a?.timestamp - b.timestamp)
            ?.map(
              (e, index) =>
                e?.chatId === `${telephoneStorage}@c.us` && (
                  <div
                    key={index}
                    className={`chat gap-1 px-shorter2 ${
                      e?.type === "incoming" ? "chat-start" : "chat-end"
                    }`}
                  >
                    {e?.textMessage && (
                      <div
                        key={index}
                        className={`flex flex-col chat-bubble ${
                          e?.type === "incoming"
                            ? "bg-[#212e35]"
                            : "bg-customTealGreenDark"
                        }`}
                      >
                        <p>{e?.textMessage}</p>
                        <small
                          className={`${
                            e?.type === "incoming"
                              ? "text-customText"
                              : "text-[#7ca398]"
                          }`}
                        >
                          {timestampToTime(e?.timestamp)}
                        </small>
                      </div>
                    )}
                  </div>
                )
            )}
          <div ref={messagesEndRef} />
        </div>
        {/* CHAT BUBBLE END */}
        <div className="h-[7%] bg-[#212e35] p-shorter4 flex gap-3 items-center">
          {iconsBottomChatData.map((e, index) => (
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
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyDown={(e) => enterKeyDown(e, sendText)}
          />
          <p className="text-customText text-3xl">
            <Icon
              icon={message ? "ic:sharp-send" : "mdi:microphone"}
              className="hover:cursor-pointer"
              onClick={message ? sendText : () => console.log("MIC ACTION")}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatData;
