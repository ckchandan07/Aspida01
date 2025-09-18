import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // npm install lucide-react
import { Link } from "react-router-dom";
import logo from "../assets/image/logo-2-1.png";
import GoogleTranslate from "./GoogleTranslate";
import facebook from "../assets/image/Socialmedial/facebook_2626269.png";
import instagram from "../assets/image/Socialmedial/instagram_2626270.png";
import twitter from "../assets/image/Socialmedial/letter-x_5119120.png";
import linkedin from "../assets/image/Socialmedial/linkedin_4782336.png";
import gmail from "../assets/image/Socialmedial/gmail_5968534.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {/* bg-[#05535F] to [#008080] */}
      {/* [#4F39F6] to-[#11F8FE]*/}
      <div className="top-header aspida-max-w bg-white">
        <div className="topp-head flex justify-between items-center gap-4 text-black font-semibold">
          <div className="flex justify-center items-center gap-2
          "><img src={gmail} alt="" className="w-[25px]" /><p>info@aspida.com</p> </div>
          <div className="top-header-social flex items-center gap-4">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
          <p>
            <GoogleTranslate />
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-50  bg-gradient-to-r from-[#05535F] to-[#008080] shadow-md ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 aspida-max-w">
          {/* Logo */}
          <div className="flex items-center gap-2  font-bold text-xl">
            <img src={logo} alt="" className="w-[170px]" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-white-900 font-bold">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-black  transition"
              >
                Services <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-gradient-to-r from-[#4F39F6] to-[#11F8FE] rounded-lg shadow-lg border border-gray-200">
                  <Link
                    to="/service"
                    className="block px-4 py-2 hover:text-black  rounded-t-lg"
                  >
                    Nutrition
                  </Link>
                  <Link
                    to="/service"
                    className="block px-4 py-2 hover:text-black "
                  >
                    Consulting
                  </Link>
                  <Link
                    to="/service"
                    className="block px-4 py-2 hover:text-black  rounded-b-lg"
                  >
                    Wellness
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="hover:text-black  transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-black  transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-[#4F39F6] transition">
            Book Now
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden text-black  bg-[#4F39F6] shadow-lg border-t border-cyan-600 text-white">
            <a href="#home" className="block px-6 py-3 hover:bg-cyan-50">
              Home
            </a>

            {/* Mobile Dropdown */}
            <div className="">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex justify-between items-center px-6 py-3 hover:bg-cyan-50"
              >
                Services <ChevronDown size={18} />
              </button>
              {dropdownOpen && (
                <div className="pl-6">
                  <a
                    href="#nutrition"
                    className="block px-6 py-2 hover:bg-cyan-50"
                  >
                    Nutrition
                  </a>
                  <a
                    href="#consulting"
                    className="block px-6 py-2 hover:bg-cyan-50"
                  >
                    Consulting
                  </a>
                  <a
                    href="#wellness"
                    className="block px-6 py-2 hover:bg-cyan-50"
                  >
                    Wellness
                  </a>
                </div>
              )}
            </div>

            <a href="#about" className="block px-6 py-3 hover:bg-cyan-50">
              About Us
            </a>
            <a href="#contact" className="block px-6 py-3 hover:bg-cyan-50">
              Contact
            </a>

            <button className="w-full bg-cyan-600 text-white py-3 font-semibold hover:bg-cyan-500 transition">
              Book Now
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
