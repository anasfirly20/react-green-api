import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={
        visible
          ? "flex justify-center items-center fixed bottom-0 right-5 mb-2 z-10 transition-all transform scale-120 btn btn-ghost hover:bg-transparent"
          : "hidden"
      }
    >
      <div>
        <button
          onClick={scrollToTop}
          className="block transition-all transform cursor-pointer hover:scale-110 hover:-translate-y-2 duration-200"
        >
          <Icon
            icon="material-symbols:arrow-back-ios"
            rotate={1}
            color="#fff"
            width={40}
          />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
