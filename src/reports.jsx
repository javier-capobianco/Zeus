import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './navbar';
import './index.css';
import report from './assets/reports1.png';

function Reports() {
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
      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full p-8 text-center">
        <h1 className="mb-12 text-center">
            <span className=" text-4xl font-bold  text-white">Blackline</span>
            <span className=" text-4xl font-bold "> Horizon</span>
            <span className=" text-4xl font-bold text-[#A6192E]"> Reports Page</span>
        </h1>
          <div className="flex justify-center items-center relative">
            <img src={report} alt="Reports Dashboard" className="scale-80 h-110 mx-auto rounded-xl shadow-2xl" />
            <motion.ul 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-24 left-20 text-center border-[#A6192E] rounded-2xl border w-64"
            >
              <li className="text-[#E6E6E6] p-2">Real-time Data</li>
              <li className="text-[#E6E6E6] p-2">Global Coverage</li>
            </motion.ul>
            <motion.ul 
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-24 right-20 text-center border-[#A6192E] rounded-2xl border w-64"
            >
              <li className="text-[#E6E6E6] p-2">Precision Analytics</li>
              <li className="text-[#E6E6E6] p-2">Interactive Dashboards</li>
            </motion.ul>
            <motion.ul 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute bottom-24 left-20 text-center border-[#A6192E] rounded-2xl border w-64"
            >
              <li className="text-[#E6E6E6] p-2">Trend Analysis</li>
              <li className="text-[#E6E6E6] p-2">Performance Metrics</li>
            </motion.ul>
            <motion.ul 
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute bottom-24 right-20 text-center border-[#A6192E] rounded-2xl border w-64"
            >
              <li className="text-[#E6E6E6] p-2">Comprehensive Reports</li>
              <li className="text-[#E6E6E6] p-2">Decision Support</li>
            </motion.ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reports;
