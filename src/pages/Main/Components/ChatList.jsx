import React, { useEffect, useState } from "react";
import { userData } from "../constants/userData";

// Icons
import { Icon } from "@iconify/react";

const icons = [
  {
    icon: "heroicons:user-group-solid",
  },
  {
    icon: "entypo:circular-graph",
  },
  {
    icon: "mdi:message-text",
  },
  {
    icon: "ic:outline-more-vert",
  },
];

// Api
import greenApi from "../green.api";

// Utils
import { timestampToDate } from "../../../../utils";

const ChatList = ({ selected, setSelected, setIndex }) => {
  const [contacts, setContacts] = useState();
  const [chats, setChats] = useState();

  const getContacts = async () => {
    try {
      const res = await greenApi.getContacts();
      setContacts(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getIncomingMessages = async () => {
    try {
      const res = await greenApi.getIncomingMessages();
      console.log(">>>> CHATS", res?.data);
      setChats(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIncomingMessages();
  }, []);

  return (
    <>
      <div className="bg-[#212e35] p-shorter4 flex justify-between items-center h-[7%]">
        <p className="text-customWhite text-5xl">
          <Icon icon="mdi:person-circle" className="hover:cursor-pointer" />
        </p>
        <div className="flex gap-6">
          {icons.map((e, index) => (
            <p key={index} className="text-customWhite text-2xl">
              <Icon icon={e?.icon} className="hover:cursor-pointer" />
            </p>
          ))}
        </div>
      </div>
      <div className="bg-[#111b21] py-[0.5vw] px-shorter4 flex items-center gap-3">
        <div className="relative w-full">
          <p className="absolute top-[50%] translate-y-[-50%] px-3 text-lg text-customWhite">
            <Icon
              icon="material-symbols:search"
              className="hover:cursor-pointer"
            />
          </p>
          <input
            type="text"
            placeholder="Search or start new chat"
            className="outline-none w-full rounded-md py-1 pl-10 text-base text-customWhite bg-[#2a3942]"
          />
        </div>
        <p className="text-customWhite text-2xl">
          <Icon
            icon="heroicons-solid:menu-alt-3"
            className="hover:cursor-pointer"
          />
        </p>
      </div>
      <div className="h-full flex flex-col overflow-y-scroll divide-y divide-[#212e35] pb-10">
        {chats?.map((e, index) => (
          <div
            key={index}
            className={`flex justify-between items-start p-shorter4 pr-5 bg-[#111b21] hover:cursor-pointer group ${
              selected == index ? "bg-[#2a3942]" : "bg-[#111b21]"
            }`}
            onClick={() => {
              setSelected(index);
              setIndex(index);
            }}
          >
            <div className="flex gap-3 items-center w-full">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 ring ring-customTealGreen">
                  <span className="text-xl">K</span>
                </div>
              </div>
              <div className="flex flex-col w-full text-customWhite">
                <p className="w-full flex justify-between font-medium">
                  {e?.senderName}{" "}
                  <small className="text-customText">
                    {timestampToDate(e?.timestamp)}
                  </small>
                </p>
                <p className="text-customText w-full flex justify-between overflow-hidden">
                  {e?.textMessage}
                  {e?.textMessage && (
                    <Icon
                      icon="ic:baseline-keyboard-arrow-down"
                      className="hover:cursor-pointer translate-x-10 group-hover:translate-x-0 transition"
                      fontSize={30}
                    />
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatList;
