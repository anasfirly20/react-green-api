import React from "react";
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

const ChatList = ({ selected, setSelected, setIndex }) => {
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
        {Array(16)
          .fill()
          .map((e, index) => (
            <div
              key={index}
              className={`flex justify-between items-start p-shorter4 pr-5 bg-[#111b21] hover:cursor-pointer ${
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
                    Lilik <small className="text-customText">19:01</small>
                  </p>
                  <p className="text-customText">Latest Message</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ChatList;
