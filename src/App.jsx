import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import RawGems from "./RawGems.jsx";
import CutandPolished from "./CutandPolished.jsx";

const NotFound = () => <div style={{ padding: 24 }}>404 — Not found</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rawgems" element={<RawGems />} />
        <Route path="/cutandpolished" element={<CutandPolished />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
