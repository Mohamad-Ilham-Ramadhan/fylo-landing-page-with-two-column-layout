import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { customizedTheme } from "../customization";

export default function App() {
  return (
    <ThemeProvider theme={customizedTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}
