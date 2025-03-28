import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-[#353535] text-white text-sm p-2 flex items-center justify-center rounded-4xl border-2 border-black px-3">
      <ul className="flex rounded-4xl overflow-hidden">
        <li className="px-0 py-2">
          <NavLink to="/" className={({ isActive }) => isActive ? "bg-[#A6192E] rounded-4xl px-5 py-2" : "px-5 py-2"}>
            Home
          </NavLink>
        </li>
        <li className=" py-2">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "bg-[#A6192E] rounded-4xl px-5 py-2" : "px-5 py-2"}>
            Dashboard
          </NavLink>
        </li>
        <li className=" py-2">
          <NavLink to="/map" className={({ isActive }) => isActive ? "bg-[#A6192E] rounded-4xl px-5 py-2" : "px-5 py-2"}>
            Map
          </NavLink>
        </li>
        <li className=" py-2">
          <NavLink to="/reports" className={({ isActive }) => isActive ? "bg-[#A6192E] rounded-4xl px-5 py-2" : "px-5 py-2"}>
            Reports
          </NavLink>
        </li>
        <li className=" py-2">
          <NavLink to="/profile" className={({ isActive }) => isActive ? "bg-[#A6192E] rounded-4xl px-5 py-2" : "px-5 py-2"}>
            Profile
          </NavLink>
        </li>
        <li className=" py-2">
          <NavLink to="/team" className={({ isActive }) => isActive ? "bg-[#A6192E] rounded-4xl px-5 py-2" : "px-5 py-2"}>
            Team
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
