import React from "react";

// Components
import ChatList from "./Components/ChatList";
import ChatBox from "./Components/ChatBoxEmpty";

// Miscellaneous
import { Helmet } from "react-helmet-async";

const Main = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <section className="px-shorter3 py-shorter4 min-h-screen">
        <div className="flex bg-red-700 h-[95vh] divide-x divide-customGray">
          <div className="w-[30%] bg-customWhite overflow-hidden">
            <ChatList />
          </div>
          <div className="w-[70%] bg-[#212e35]">
            <ChatBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
