import { PaletteMode } from "@mui/material";
import { lightBlue, pink, grey, blue, indigo } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: [
      "Market Sans",
      "Arial",
      '"Helvetica Neue"',
      "Helvetica",
      "sans-serif",
    ].join(","),
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: lightBlue[200],
          },
          secondary: {
            main: pink[700],
          },
          divider: grey[300],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: indigo[600],
          },
          secondary: {
            main: pink[700],
          },
          background: {
            default: "rgb(0, 20, 20)",
            paper: indigo[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default getDesignTokens;
