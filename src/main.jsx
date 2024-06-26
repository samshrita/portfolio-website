import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./utils/index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./utils/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
