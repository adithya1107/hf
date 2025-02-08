import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import agni from "../assets/projects/agniastra.png"
import arya from "../assets/projects/arya.png"
import ray from "../assets/projects/rayquaza.png"
import vyom from "../assets/projects/vyom.png"
import altair from "../assets/projects/altair.png"
import pheonix from "../assets/projects/pheonix.png"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => (prev === key ? null : key));
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-evenly items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-40 mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 items-center">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#subsystem">Subsystems</a></li>

            {/* Dropdown for Projects */}
            <li className="relative dropdown">
              <button
                onClick={() => toggleDropdown('projects')}
                className="focus:outline-none flex items-center gap-2 text-white transition"
              >
                Projects <span className="text-sm">&#9662;</span>
              </button>
              {dropdownOpen === 'projects' && (
                <div className="absolute left-0 mt-2 w-56 text-white shadow-2xl rounded-lg py-3 z-10 animate-fade-in backdrop-blur-lg bg-black/80">
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                    <img className="w-8" src={agni} alt="" /> AgniAstra
                  </a>
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                    <img className="w-8" src={altair} alt="" /> Altair
                  </a>
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                  <img className="w-8" src={ray} alt="" /> Rayquaza
                  </a>
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                  <img className="w-8" src={pheonix} alt="" /> Pheonix
                  </a>
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                  <img className="w-8" src={arya} alt="" /> Arya
                  </a>
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                  <img className="w-8" src={vyom} alt="" /> Vyom
                  </a>
                </div>
              )}
            </li>

            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Team</a></li>

            {/* Dropdown for Alumni */}
            <li className="relative dropdown">
              <button
                onClick={() => toggleDropdown('alumni')}
                className="focus:outline-none flex items-center gap-2 text-white hover:text-or-600 transition"
              >
                Alumni <span className="text-sm">&#9662;</span>
              </button>
              {dropdownOpen === 'alumni' && (
                <div className="absolute left-0 mt-2 w-56 text-white shadow-2xl rounded-lg py-3 z-10 animate-fade-in backdrop-blur-lg bg-black/80">
                  <a href="#" className=" px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                    2024
                  </a>
                  <a href="#" className=" px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                     2023
                  </a>
                  <a href="#" className=" px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                     2022
                  </a>
                  <a href="#" className=" px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                     2021
                  </a>
                  <a href="#" className=" px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                    2020
                  </a>
                  <a href="#" className=" px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                     2019
                  </a>
                  <a href="#" className=" px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                     2018
                  </a>
                </div>
              )}
            </li>

            {/* Dropdown for Media */}
            <li className="relative dropdown">
              <button
                onClick={() => toggleDropdown('media')}
                className="focus:outline-none flex items-center gap-2 text-white transition"
              >
                Media <span className="text-sm">&#9662;</span>
              </button>
              {dropdownOpen === 'media' && (
                <div className="absolute left-0 mt-2 w-56 text-whiteshadow-2xl rounded-lg py-3 z-10 animate-fade-in backdrop-blur-lg bg-black/80">
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                    Images
                  </a>
                  <a href="#" className="px-4 py-2 hover:bg-orange-500 rounded-2xl transition flex items-center gap-2">
                    Blogs
                  </a>
                </div>
              )}
            </li>

            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;