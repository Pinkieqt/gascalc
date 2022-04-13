module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      "light",
      {
        mytheme: {
          primary: "#fca5a5",

          secondary: "#f4bd89",

          accent: "#b3f49f",

          neutral: "#18181b",

          "base-100": "#000000",

          info: "#5187CD",

          success: "#6BDBAD",

          warning: "#F2C54A",

          error: "#F2776E",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "mytheme",
  },
};
