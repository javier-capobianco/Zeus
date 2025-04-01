import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './navbar';
import './index.css';
import profile from './assets/profile1.png';
import LoginSignup from './login_signup';

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
        <LoginSignup/>
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
