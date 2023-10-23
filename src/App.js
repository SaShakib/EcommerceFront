import React from "react";
import "./App.css";
import { ThemeProvider, Typography } from "@material-ui/core";
import theme from "./theme";
import NavigationHeader from "./NavigationHeader";
import Sliders from "./slider";
import MediaCard from "./Card";

function App({ classes }) {
  return (
    <ThemeProvider theme={theme}>
      <NavigationHeader />
      <Sliders />
      <MediaCard />
    </ThemeProvider>
  );
}

export default App;
