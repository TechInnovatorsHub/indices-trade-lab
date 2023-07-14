// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar  from "./components/Home/Navbar";
import { AnimatePresence } from 'framer-motion';
import Landingpage from "./components/Home/Landingpage";
import Works from "./components/Works/Works";
import About from './components/About/About';
import Plans from './components/Plans/Plans';
import FAQs from './components/FAQs/Faqs';
import Support from './components/Support/Support';
import Signup from "./components/AuthPage/Signup";
import Login from './components/AuthPage/Login';

import Withdrawals from "./components/Withdrawals/Withdrawal";
import Deposits from "./components/Dashboard/Deposit/Deposit";
import Livetrading from "./components/Dashboard/Livetrading/Livetrading";
import Connect from "./components/Connects/Connect";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <AnimatePresence wait>
      <Navbar />
    <div  >
      {/* <Navbar /> */}
        <main >
          <Routes>
            <Route path="/" element={<Landingpage />} /> 
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/withdrawals" element={<Withdrawals />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/livetrading" element={<Livetrading />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
    </div>
    </AnimatePresence>
  );
}

export default App;