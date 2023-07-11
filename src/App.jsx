// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar  from "./components/Home/Navbar";
import { AnimatePresence } from 'framer-motion';
import Landingpage from "./components/Home/Landingpage";
import About from './components/About/About';
import Plans from './components/Plans/Plans';
import FAQs from './components/FAQs/Faqs';
import Support from './components/Support/Support';
import SignUp from './components/AuthPage/Register';
import Login from './components/AuthPage/Login';

function App() {
  return (
    <AnimatePresence wait>
      <Navbar />
    <div className="w-screen h-auto flex  flex-col" >
      {/* <Navbar /> */}
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        
    </div>
    </AnimatePresence>
  );
}

export default App;