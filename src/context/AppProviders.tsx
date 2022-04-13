import React, { ReactNode, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { Provider } from "react-redux";
import configureStore from "store/configureStore";

import getDesignTokens from "styles/theme";

const store = configureStore();

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

type AppProvidersProps = {
  children: ReactNode;
};

function AppProviders({ children }: AppProvidersProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // material ui
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    if (prefersDarkMode) {
      setMode("dark");
    }
  }, [prefersDarkMode]);

  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>{children}</Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default AppProviders;
