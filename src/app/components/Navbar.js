'use client';
import './Navbar.css';
import React,{useState} from "react";
import Link from 'next/link';


const Navbar = ({setOpenPrivacy,handleToggleModal}) => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <nav className="bg-black responsive-container-padding-dashboard relative-hero-padding lg:py-10 lg:px-20 px-6 py-3 ">
      <div className="hidden lg:flex justify-between items-center ">
        {/* Left part - Logo */}
        <div className="flex items-center justify-start   lg:w-[25%]">
          <Link href="/">
            <img src="/Images/header-logo-desktop.png" alt="Logo" className='hover:scale-110 transform transition-transform duration-300 ease-in' />
          </Link>
        </div>

        {/* Center part - Links */}
        <div className="flex-grow font-semibold flex justify-end md:ml-5 lg:ml-0 poppins lg:w-[50%] ">
          <a href="#" className="text-white hover:text-gray-300 px-4  text-base hover:scale-110 transform transition-transform duration-300 ease-in">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 px-4  text-base hover:scale-110 transform transition-transform duration-300 ease-in">
            Features
          </a>
          <a href="#" className="text-white hover:text-gray-300 px-4  text-base hover:scale-110 transform transition-transform duration-300 ease-in">
            Our Process
          </a>
          {/* Add more links as needed */}
          <a href="#" className="text-white hover:text-gray-300 px-4  text-base hover:scale-110 transform transition-transform duration-300 ease-in">
            Why US
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center ml-5">
          <Link href="/">
          <img src="/Images/header-logo-mob.png" alt="Logo" className='hover:scale-110 transform transition-transform duration-300 ease-in'/>
          </Link>
          
        </div>

        {/* Hamburger Menu */}
        <div className="mr-5"  onClick={() => {handleToggleModal() }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
            <path d="M2 2H17" stroke="white" stroke-width="3" stroke-linecap="round" />
            <path d="M2 8H10" stroke="white" stroke-width="3" stroke-linecap="round" />
            <path d="M2 14H17" stroke="white" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
