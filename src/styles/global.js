import theme from "./theme";

const globals = {
  "@global": {
    "*": {
      boxSizing: "border-box"
    },
    body: {
      fontFamily: `"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"`,
      background: theme.palette.background.fourth
    }
  }
};

export default globals;
