import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./navbar";
import "./index.css";
import Device from "./assets/device.png";
import Grid from "./assets/grid.png";
import LoginSignup from "./login_signup"

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#181818] text-white h-screen flex flex-col w-full">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <span className="text-white">blackline</span>
          <span className="text-[#A6192E]">horizon</span>
        </div>
        <NavBar />
        <LoginSignup/>
      </header>

      {/* Main Content (Moved Higher) */}
      <main className="flex-1 flex flex-col justify-start items-center text-center pt-12">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-semibold leading-tight"
        >
          Enhancing Global Safety with
          <br />
          Cutting-Edge <br />
          <span className="text-[#A6192E]">Predictive Analytics</span>
        </motion.h1>
        <p className="text-md mt-5 text-[#E6E6E6]">
          Empowering industries with real-time safety insights and predictions.
        </p>

        {/* Buttons */}
        <div className="space-x-3 mt-5">
          <a
            href="https://www.blacklinesafety.com/contact"
            rel="noopener noreferrer"
            className="bg-[#A6192E] px-5 py-2 text-sm rounded-full border-2 border-[#681421] hover:bg-[#8B1C24] inline-block text-sm text-white text-center"
          >
            Get in touch
          </a>
            <a
            href="https://www.blacklinesafety.com/" 
            className="bg-[#353535] px-5 py-2 text-sm rounded-full border-2 border-[#1D1C1C] hover:bg-[#2C2C2C]">
              Learn More
            </a>
        </div>
      </main>

      <div className="relative">
        {/* Background Grid Image (Underneath) */}
        <img
          src={Grid}
          alt="Grid Background"
          className="mx-auto absolute mt-30 w-[100%] h-[65%]"
        />

        {/* Device Image (On Top) */}
        <motion.img
          src={Device}
          alt="Device Image"
          className="scale-90 mx-auto mb-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default Home;
