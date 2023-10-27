// import logo from './logo.svg';
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Strategie from "./components/Strategie";
import Create from "./components/Create";
import Contact from "./components/Contact";
import PreLoader from "./components/PreLoader";
// import Gallery from "./components/Gallery";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <PreLoader loading={loading} />
      ) : ( */}
      {/* <motion.div
        className="box"
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <span>Hello Cosmos</span>
      </motion.div> */}
      <Router>
        <Navbar />
        <nav>
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Strategie" element={<Strategie />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </nav>
      </Router>

      {/* )} */}
    </>
  );
}

export default App;
