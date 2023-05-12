/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customTealGreen: "#128C7E",
        customTealGreenDark: "#075E54",
        customLightGreen: "#25D366",
        customLightBlue: "#34B7F1",
        customChatBg: "#ece5dd",
        customBubbleChatOutgoing: "#dcf8c6",
        customBlack: "#1f2c33",
        customWhite: "#E3E3E3",
        customBg: "#212e35",
        customHeader: "#cad0d3",
        customText: "#7d8d97",
        customGray: "#374044",
      },
      padding: {
        shorter4: "1vw",
        shorter3: "2vw",
        shorter2: "3vw",
        shorter: "4vw",
        normal: "6vw",
        longer: "8vw",
        longer2: "10vw",
        longer3: "12vw",
        longer4: "14vw",
        longer5: "16vw",
        longer6: "18vw",
        longer7: "20vw",
      },
    },
  },
  plugins: [],
};
