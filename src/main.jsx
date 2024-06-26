import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./Style/GlobalStyles.js";
import Routes from "./Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>
);
