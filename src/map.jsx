import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './navbar';
import './index.css';
import map from './assets/map1.png';

function Map() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#181818] text-white min-h-screen flex flex-col w-full overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <span className="text-white">blackline</span>
          <span className="text-[#A6192E]">horizon</span>
        </div>
        <NavBar />
        <div className="space-x-2">
        <a href="http://app.blacklinehorizon.com/register">
        <button className="signup-button text-sm bg-transparent text-white hover:bg-gray-700 py-2 px-4 rounded-full">
            Sign Up
        </button>
        </a>
        <a href="http://app.blacklinehorizon.com/login">
        <button className="login-button text-sm bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600">
            Log In
        </button>
        </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-row justify-center items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-1/2 p-8"
        >
          <div className="max-w-xl mx-auto">
          <h1 className="mb-6 text-center">
            <span className=" text-4xl font-bold  text-white">Blackline</span>
            <span className=" text-4xl font-bold "> Horizon</span>
            <span className=" text-4xl font-bold text-[#A6192E]"> Interactive Map</span>
            </h1>
            <p className="mb-4 text-sm text-[#C2C0C0] text-center mb-12">Access real-time visualization of global safety incidents. Click on regions to explore specific events and trends.</p>
            {/* Features and Benefits Columns */}
            <div className="grid grid-cols-2 gap-8  text-[#808080]"> {/* Increased gap size */}
              <div>
                <h2 className="text-xl font-bold text-[#DC3952] text-center">Features</h2>
                <ul className="list-disc pl-5 mt-2 text-md">
                  <li className="mb-2">Real-Time Data: View up-to-date incident reports worldwide.</li>
                  <li className="mb-2">Interactive Filters: Customize views by incident type, date, and location.</li>
                  <li className="mb-2">Geographic Alerts: Receive notifications for new incidents in designated areas.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#DC3952] text-center">Benefits</h2>
                <ul className="list-disc pl-5 mt-2 text-md">
                  <li className="mb-2">Enhance situational awareness with a global perspective.</li>
                  <li className="mb-2">Improve risk management by identifying and reacting to trends.</li>
                  <li className="mb-2">Allocate resources efficiently based on incident hotspots.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-1/2 p-4"
        >
          <img src={map} alt="Interactive Map" className="scale-100 h-110 mx-auto rounded-xl shadow-2xl" />
        </motion.div>
      </main>
    </div>
  );
}

export default Map;
