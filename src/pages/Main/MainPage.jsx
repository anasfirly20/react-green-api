import React from "react";

// Components
import ChatList from "./Components/ChatList";
import ChatBox from "./Components/ChatBox";

// Miscellaneous
import { Helmet } from "react-helmet-async";

const Main = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <section className="px-shorter3 py-shorter4 min-h-screen ">
        <div className="flex bg-red-700">
          <div className="w-[30%] bg-customWhite">
            <ChatList />
          </div>
          <div className="w-[70%] bg-[#212e35] h-[95vh]">
            <ChatBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
