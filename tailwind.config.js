module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        arrow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
      },
      backgroundPosition: {
        "arrow-l": "0 -32px",
        "arrow-r": "0 -48px",
      },
      backgroundSize: {
        "arrow-size": "16px 64px",
        "selling-size": "80px",
      },
      backgroundColor: {
        "modal": "rgba(0,0,0,.65)",
      },
    },
  },
  plugins: [],
  important: true,
};
