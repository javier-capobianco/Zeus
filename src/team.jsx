import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './navbar';
import './index.css';
import profile from './assets/profile.png'; 
import Javi from './assets/Javi.png'; 
import Maxwell from './assets/max.png'; 
import Arushi from './assets/arushi.jpeg'; 
import Shanzi from './assets/ysz.jpg'; 
import Dip from './assets/dip.png'; 
import Rod from './assets/rod.png'; 
import LoginSignup from './login_signup';

function Team() {
  const [count, setCount] = useState(0);

  const teamMembers = [
    { name: 'Sandip Mishra', description: 'Team Leader', image: Dip },
    { name: 'Rodrigo Amesty', description: 'Backend Leader', image: Rod },
    { name: 'Javier Capobianco Rey', description: 'Backend Developer', image: Javi },
    { name: 'Arushi Gupta', description: 'Frontend Leader', image:Arushi },
    { name: 'Maxwell Couture', description: 'ML/AI Data Analytics Specialist', image: Maxwell},
    { name: 'Shanzi Ye', description: 'Research Coordinator', image: Shanzi },
  ];

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
          <h1 className="mb-6 text-center mb-16">
            <span className="text-5xl font-bold text-white">Meet</span>
            <span className="text-5xl font-bold"> The</span>
            <span className="text-5xl font-bold text-[#A6192E]"> Team</span>
          </h1>

          {/* 3x2 Grid with animations */}
          <div className="grid grid-cols-3 gap-14">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full mb-4 shadow-2xl"
                />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-[#E6E6E6]">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Team;
