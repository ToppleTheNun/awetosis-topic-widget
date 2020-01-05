import React from "react";
import { ThemeProvider } from "emotion-theming";

import theme from "./preset";

type ThemedAppProps = {
  children: React.ReactNode;
};

const ThemedApp: React.FC<ThemedAppProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemedApp;
