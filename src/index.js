import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./css/GlobalStyles.js";
import Home from "./home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <Home />
  </>
);
