import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ScrollToBottom = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrolled + clientHeight + 150 > offsetHeight) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={
        visible ? "absolute bottom-16 right-6" : "absolute bottom-16 right-6"
      }
    >
      <button
        className="transition-all transform cursor-pointer hover:scale-110 hover:-translate-y-2 duration-200"
        onClick={scrollToBottom}
      >
        <Icon
          icon="material-symbols:arrow-forward-ios"
          rotate={1}
          color="#7d8d97"
          width={30}
          className="bg-[#212e35] p-2 rounded-full"
        />
      </button>
    </div>
  );
};

export default ScrollToBottom;

//
