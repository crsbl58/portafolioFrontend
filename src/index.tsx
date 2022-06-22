import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
