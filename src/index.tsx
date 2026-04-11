import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

// import LinkPage from "./link-page";
import CVPage from "./cv-page";
import PaintingsPage from "./paintings-page";
import DrawingsPage from "./drawings-page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/links" element={<LinkPage />} /> */}
        <Route path="/cv" element={<CVPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
