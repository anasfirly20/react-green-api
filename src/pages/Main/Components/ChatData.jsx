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
import { getTelephone, enterKeyDown } from "../../../../utils";

// Miscellaneous
import { toast } from "react-hot-toast";

const ChatData = ({ data, getSentMessages }) => {
  const telephoneStorage = getTelephone();
  const [message, setMessage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState();

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
        e?.senderId?.includes("79274420656")
      );
      setIncomingMessages(res?.data?.reverse());
      // console.log("ALL >>", res?.data);
    } catch (err) {
      console.log(err);
    }
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
          <div className="chat chat-start gap-1 px-shorter2">
            {incomingMessages
              ?.filter((e) => e?.senderId?.includes(telephoneStorage))
              ?.map((e, index) => (
                <div className="chat-bubble bg-[#212e35]" key={index}>
                  {e?.textMessage}
                </div>
              ))}
          </div>
          <div className="chat chat-end gap-1 px-shorter2">
            {data?.map(
              (e, index) =>
                e?.chatId === `${telephoneStorage}@c.us` && (
                  <div
                    key={index}
                    className="chat-bubble bg-customTealGreenDark"
                  >
                    {e?.textMessage}
                  </div>
                )
            )}
          </div>
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
