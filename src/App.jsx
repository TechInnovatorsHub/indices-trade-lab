// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Home/Landingpage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;