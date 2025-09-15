import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "../components/layouts/SiteLayout";
import Home from "../pages/user/Home";
import Portfolio from "../pages/user/Portfolio";
import Resume from "../pages/user/Resume";
import Development from "../pages/user/Development";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/development" element={<Development />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
