'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-100 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-black font-bold text-xl">
            Akorn Movers
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
        <Link
            href="/"
            className="text-black hover:text-white cursor-pointer"
          >
            Home
          </Link>
          <ScrollLink
            to="#services"
            smooth
            duration={500}
            className="text-black hover:text-white cursor-pointer"
          >
            Services
          </ScrollLink>
        
          <ScrollLink
            to="#testimonials"
            smooth
            duration={500}
            className="text-black hover:text-white cursor-pointer"
          >
            Testimonials
          </ScrollLink>
        
          <ScrollLink
            to="#contact"
            smooth
            duration={500}
            className="text-black hover:text-white cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-green-100 pt-4 pb-2 px-4 md:hidden">
          <div className="flex flex-col space-y-3">

            <Link
              href="/"
              className="text-black hover:text-white cursor-pointer"
            >
            Home
            </Link>
            <ScrollLink
              to="#services"
              smooth
              duration={500}
              className="text-black hover:text-white cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="#testimonials"
              smooth
              duration={500}
              className="text-black hover:text-white cursor-pointer"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="#contact"
              smooth
              duration={500}
              className="text-black hover:text-white cursor-pointer"
            >
              Contact Us
            </ScrollLink>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;