import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
