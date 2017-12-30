import theme from "./theme";

const globals = {
  "@global": {
    "*": {
      boxSizing: "border-box"
    },
    body: {
      fontFamily: `"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"`,
      background: theme.palette.background.fourth
    },
    "@media (min-device-width: 1024px)": {
      "*::-webkit-scrollbar": {
        width: "6px"
      },
      "*::-webkit-scrollbar-track": {
        background: "#eee"
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#ccc"
      }
    }
  }
};

export default globals;
