import React from "react";

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

const ChatList = () => {
  return (
    <>
      <div className="bg-[#212e35] py-shorter4 px-shorter4 flex justify-between items-center">
        <p className="text-customWhite text-3xl">
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
      <div className="h-full flex flex-col overflow-y-scroll">
        {Array(20)
          .fill()
          .map((index) => (
            <div
              className={`flex justify-between items-start px-[0.5vw] py-[0.5vw] bg-[#111b21] pr-5 hover:bg-[#2a3942] hover:cursor-pointer`}
            >
              <div className="flex gap-3 items-center w-full">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12 ring ring-customTealGreen">
                    <span className="text-xl">K</span>
                  </div>
                </div>
                <div className="flex flex-col w-full text-customWhite">
                  <p className="w-full flex justify-between font-medium">
                    Bob <small className="text-[#6f7e87]">19:01</small>
                  </p>
                  <p className="text-[#6f7e87]">Latest Message</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ChatList;
