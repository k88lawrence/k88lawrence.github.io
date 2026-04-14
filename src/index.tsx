import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import "./App.css";
import App from "./App";

// import LinkPage from "./link-page";
import CVPage from "./cv-page";
import PaintingsPage from "./paintings-page";
import DrawingsPage from "./drawings-page";
import ContactPage from "./contact-page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/drawings" />} />
        {/* <Route path="/links" element={<LinkPage />} /> */}
        <Route path="/cv" element={<CVPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
