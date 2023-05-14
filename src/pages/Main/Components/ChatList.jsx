import React, { useEffect, useState } from "react";
import { chatData, userData } from "../constants/userData";

// Icons
import { Icon } from "@iconify/react";

// Constants
import ChatData from "./ChatData";

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

const dropDown = [
  {
    label: "New Chat",
  },
  {
    label: "Logout",
  },
];

// Api
import greenApi from "../green.api";

// Utils
import { timestampToDate } from "../../../../utils";

const ChatList = ({ selected, setSelected, setIndex }) => {
  const [chats, setChats] = useState(chatData);
  const [telephone, setTelephone] = useState();
  const [telephoneSubmit, setTelephoneSubmit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTelephone({ ...telephone, [name]: value });
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleNewChat = () => {
    console.log("ADD CHAT");
  };

  return (
    <>
      <div className="bg-[#212e35] p-shorter4 flex justify-between items-center h-[7%]">
        <p className="text-customWhite text-5xl">
          <Icon icon="mdi:person-circle" className="hover:cursor-pointer" />
        </p>
        <div className="flex gap-6">
          {icons.map((e, index) => (
            <>
              {e?.icon.includes("outline-more-vert") ? (
                <div key={index} className="dropdown dropdown-end">
                  <label tabIndex={0}>
                    {" "}
                    <p className="text-customWhite text-2xl">
                      <Icon icon={e?.icon} className="hover:cursor-pointer" />
                    </p>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow text-customWhite bg-[#212e35] w-52 mt-3 space-y-3"
                  >
                    {dropDown?.map((e, index) => (
                      <li
                        key={index}
                        className="text-base cursor-pointer hover:bg-customBlack px-5 py-2"
                        onClick={
                          e?.label === "Logout" ? handleLogout : handleNewChat
                        }
                      >
                        {e?.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-customWhite text-2xl">
                  <Icon icon={e?.icon} className="hover:cursor-pointer" />
                </p>
              )}
            </>
          ))}
        </div>
      </div>
      {telephoneSubmit && (
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
      )}
      <div className="h-full flex flex-col overflow-y-scroll divide-y divide-customBg pb-10 scrollbar-thin scrollbar-track-[#111b21] scrollbar-thumb-customBg">
        {telephoneSubmit ? (
          chats?.map((e, index) => (
            <div
              key={index}
              className={`flex justify-between items-start p-shorter4 pr-5 bg-[#111b21] hover:cursor-pointer hover:bg-[#2a3942] group ${
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
                    {telephone}
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
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-full gap-3 px-5">
            <h1>START A NEW CHAT</h1>
            <input
              className="w-full p-2"
              type="number"
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Type contact's number"
            />
            <button
              className="w-[30%] p-2 font-semibold rounded-lg bg-customTealGreen text-customWhite"
              onClick={(e) => {
                e.preventDefault();
                setTelephoneSubmit(telephone);
              }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatList;
