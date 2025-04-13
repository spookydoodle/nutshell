import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "../styles/themes";
import * as AppState from "../state";
import * as Hooks from '../hooks';

interface Props {
  children?: React.ReactNode;
}

export const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const mode = Hooks.useSubject(AppState.mode$);
  const appId = Hooks.useAppId();
  const theme = createTheme(mode, appId || "DEFAULT");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
