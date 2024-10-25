'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone, MapPin } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItemClass = "relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 group cursor-pointer";
  const navItemUnderline = "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200";

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-blue-600 text-white py-1">
        <div className="container mx-auto px-4 flex justify-end space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span className="text-sm">(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span className="text-sm">123 Moving St, City, State</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`container mx-auto px-4 py-4 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="text-blue-600" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Akorn Movers
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navItemClass}>
              Home
              <div className={navItemUnderline}></div>
            </Link>
            <ScrollLink to="services" smooth duration={500} className={navItemClass}>
              Services
              <div className={navItemUnderline}></div>
            </ScrollLink>
            <ScrollLink to="testimonials" smooth duration={500} className={navItemClass}>
              Testimonials
              <div className={navItemUnderline}></div>
            </ScrollLink>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4 px-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <ScrollLink
              to="services"
              smooth
              duration={500}
              className="block text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth
              duration={500}
              className="block text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Testimonials
            </ScrollLink>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;