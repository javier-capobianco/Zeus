import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './navbar';
import './index.css';
import profile from './assets/profile1.png';

function Profile() {
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
        <h1 className="mb-6 text-center">
            <span className=" text-4xl font-bold  text-white">Blackline</span>
            <span className=" text-4xl font-bold "> Horizon</span>
            <span className=" text-4xl font-bold text-[#A6192E]"> Profile Page</span>
        </h1>
            <p className="text-md mt-6 text-[#C2C0C0]">
            Manage your account effortlessly with our Profile page. Customize settings, 
        </p>
        <p className="text-md text-[#C2C0C0] ">
            update personal information, and secure your account—all from one convenient location. Explore a user-friendly 
        </p>
        <p className="text-md text-[#C2C0C0] mb-6">
             interface designed to enhance your experience.
        </p>
          <div className="flex justify-center items-center relative">
            <motion.img 
              src={profile} 
              alt="Reports Dashboard" 
              className="scale-100 h-110 mx-auto rounded-xl shadow-2xl" 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
