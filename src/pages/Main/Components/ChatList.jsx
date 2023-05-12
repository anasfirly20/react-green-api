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
          <p className="absolute top-[50%] translate-y-[-50%] px-3 text-lg">
            <Icon
              icon="material-symbols:search"
              className="hover:cursor-pointer"
            />
          </p>
          <input
            type="text"
            placeholder="Search or start new chat"
            className="outline-none w-full rounded-md py-1 pl-10 text-sm"
          />
        </div>
        <p className="text-customWhite text-2xl">
          <Icon
            icon="heroicons-solid:menu-alt-3"
            className="hover:cursor-pointer"
          />
        </p>
      </div>
    </>
  );
};

export default ChatList;
