import React, { useEffect, useState } from "react";

// Components
import ChatList from "./Components/ChatList";
import ChatBox from "./Components/ChatBox";

// Miscellaneous
import { Helmet } from "react-helmet-async";

const Main = ({ title }) => {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState();

  console.log(">>>>>");

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <section className="px-shorter3 py-shorter4 min-h-screen">
        <div className="flex bg-red-700 h-[95vh] divide-x divide-customGray">
          <div className="w-[30%] bg-customWhite overflow-hidden">
            <ChatList
              selected={selected}
              setSelected={setSelected}
              setIndex={setIndex}
            />
          </div>
          <div className="w-[70%] bg-[#212e35] relative">
            <ChatBox
              selected={selected}
              setSelected={setSelected}
              index={index}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
