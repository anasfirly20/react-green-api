import React, { useEffect, useState } from "react";

// Constants
import { chatData, userData, dropDown, icons } from "../constants/userData";

// Icons
import { Icon } from "@iconify/react";

// Api
import greenApi from "../green.api";

// Utils
import { timestampToDate, getTelephone } from "../../../../utils";

const ChatList = ({ selected, setSelected, setIndex, data }) => {
  const [chats, setChats] = useState(chatData);
  const [telephone, setTelephone] = useState();
  const [telephoneSubmit, setTelephoneSubmit] = useState();

  const telephoneStorage = getTelephone();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleNewChat = () => {
    console.log("ADD CHAT");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (telephone) {
      setTelephoneSubmit(telephone);
      localStorage.setItem("telephone", telephone);
    }
  };

  const handeDeleteChat = () => {
    localStorage.removeItem("telephone");
    window.location.reload();
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
                <div className="dropdown dropdown-end" key={index}>
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
      {telephoneStorage && (
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
        {telephoneStorage ? (
          chats?.map((e, index) => (
            <div
              key={index}
              className={`flex justify-between items-start p-shorter4 bg-[#111b21] hover:cursor-pointer hover:bg-[#2a3942] group ${
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
                    <span className="text-xl">N</span>
                  </div>
                </div>
                <div className="flex flex-col w-full text-customWhite">
                  <p className="w-full flex justify-between font-medium">
                    +{telephoneStorage}
                    <small className="text-customText">
                      {timestampToDate(e?.timeStamp)}
                    </small>
                  </p>
                  <div className="text-customText w-full flex justify-between">
                    <p>{e?.textMessage}</p>
                    {e?.textMessage && (
                      <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                          <Icon
                            icon="ic:baseline-keyboard-arrow-down"
                            className="hover:cursor-pointer translate-x-14 group-hover:translate-x-0 transition"
                            fontSize={30}
                          />
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow text-customWhite bg-[#212e35] w-52 mt-3 space-y-3"
                        >
                          <li
                            className="text-base cursor-pointer hover:bg-customBlack px-5 py-2"
                            onClick={handeDeleteChat}
                          >
                            Delete Chat
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-full gap-3 px-5">
            <h1>START A NEW CHAT</h1>
            <input
              className="w-full p-2 outline-none rounded-lg"
              type="number"
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              placeholder="Type contact's number"
            />
            <button
              className="w-[30%] p-2 font-semibold rounded-lg bg-customTealGreen text-customWhite"
              onClick={handleSubmit}
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
