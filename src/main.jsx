/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContexProvider from "./Context/StoreContext.jsx";


//basi
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContexProvider>
      <App />
    </StoreContexProvider>
  </BrowserRouter>
);
