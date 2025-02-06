import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './navbar';
import './index.css';
import Dash from './assets/dashboard.png';

function Dashboard() {
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
          className="w-1/2 p-4"
        >
          <img src={Dash} alt="Dashboard Image" className="scale-90 mx-auto rounded-xl shadow-2xl" />
        </motion.div>
        
        <motion.div 
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white p-8"
        >
          <div className="max-w-2xl mx-auto text-[#E6E6E6]">
            <h1 className="mb-6">
              <span className="text-4xl font-bold text-white">Blackline</span>
              <span className="text-4xl font-bold"> Horizon</span>
              <span className="text-4xl font-bold text-[#A6192E]"> Dashboard</span>
            </h1>
            <p className="mb-4 text-sm text-[#C2C0C0]">Our innovative Global Safety Incident Dashboard provides you with an intuitive interface to monitor safety trends worldwide. Here's a quick guide to what you'll find on your dashboard:</p>
            <div className="border-t border-gray-300 py-4 text-[#808080] mt-12">
              <h2 className="text-md "><span className="text-[#DC3952] font-semibold">Global Incidents Map</span> displays safety incidents worldwide, highlighting trends and risk areas.</h2>
            </div>
            <div className="border-t border-gray-300 py-4 text-[#808080]">
              <h2 className="text-md "><span className="text-[#DC3952] font-semibold">Total Incidents</span> section provides a real-time count of all reported safety incidents.</h2>
            </div>
            <div className="border-t border-gray-300 py-4 text-[#808080]">
              <h2 className="text-md "><span className="text-[#DC3952] font-semibold">Historical Incidents</span> feature allows review and comparison of past incidents by type.</h2>
            </div>
            <div className="border-t border-gray-300 py-4 text-[#808080]">
              <h2 className="text-md "><span className="text-[#DC3952] font-semibold">Incident Categories</span> present specific metrics for fall and CO incidents, showing severity and frequency.</h2>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default Dashboard;
