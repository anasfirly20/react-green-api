export const LoadToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const LoadToBottom = () => {
  window.scrollTo({
    bottom: 0,
    left: 0,
    behavior: "smooth",
  });
};
