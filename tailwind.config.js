/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "chat-open": "chat-open 0.5s ease-out",
      },
      keyframes: {
        "chat-open": {
          "0%": {
            opacity: 0,
            translate: "0 50%",
          },
          "70%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
            translate: "0 0",
          },
        },
      },
    },
  },
  plugins: [],
};
