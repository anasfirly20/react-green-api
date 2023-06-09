import React, { useEffect, useState } from "react";

// Components
import ChatList from "./Components/ChatList";
import ChatBox from "./Components/ChatBox";

// Miscellaneous
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

// APi
import greenApi from "./green.api";

const Main = ({ title }) => {
  const [selected, setSelected] = useState(0);
  const [index, setIndex] = useState(null);
  const [data, setData] = useState();
  const [incominMessages, setIncominMessages] = useState();

  const getSentMessages = async () => {
    try {
      const res = await greenApi.getOutgoingMessages();
      setData(res?.data?.reverse());
      // console.log("REVERSED >>", data.reverse()[0]?.textMessage);
    } catch (err) {
      console.log(err);
    }
  };

  const getIncomingMessages = async () => {
    try {
      const res = await greenApi.getIncomingMessages();
      // console.log("INCOMING >>>", res?.data?.filter((e) => ));
      const filteredData = res?.data?.filter((e) =>
        e?.senderId?.includes("79274420656")
      );
      // console.log("FILTERED>>", filteredData);
      setIncominMessages(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSentMessages();
    // getIncomingMessages();
  }, []);

  // console.log(incominMessages, ">>>>>");

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
              data={data}
              index={index}
            />
          </div>
          <div className="w-[70%] bg-[#212e35] relative">
            <ChatBox
              selected={selected}
              setSelected={setSelected}
              index={index}
              data={data}
              getSentMessages={getSentMessages}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
