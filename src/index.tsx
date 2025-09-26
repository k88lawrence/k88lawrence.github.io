import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";

import LinkPage from "./link-page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/links" element={<LinkPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
