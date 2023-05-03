import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import App1 from "./App1";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
//import { dark } from "@mui/material/styles/createPalette";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App1 />
    </ThemeProvider>
  </React.StrictMode>
);
