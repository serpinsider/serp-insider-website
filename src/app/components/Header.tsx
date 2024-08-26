'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#1C1C1C] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          SERP Insider
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6">
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            ref={dropdownRef}
          >
            <button 
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-0 w-48 bg-[#3D3D3D] rounded-md shadow-lg py-1 z-10">
                <div className="py-2">
                  <Link href="/services/link-building" className="block px-4 py-2 text-white hover:bg-[#4D4D4D]">
                    Link Building
                  </Link>
                  <Link href="/services/reddit-marketing" className="block px-4 py-2 text-white hover:bg-[#4D4D4D]">
                    Reddit Marketing
                  </Link>
                  <Link href="/services/local-seo" className="block px-4 py-2 text-white hover:bg-[#4D4D4D]">
                    Local SEO
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/courses" className="text-white hover:text-gray-300">
            Courses
          </Link>
          <a href="https://serpinsider.co" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
          <a href="https://serpinsider.co" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            Newsletter
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#1C1C1C] p-4">
            <div className="flex flex-col space-y-4">
              <div>
                <button 
                  className="text-white hover:text-gray-300 focus:outline-none flex items-center"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link href="/services/link-building" className="block text-white hover:text-gray-300">
                      Link Building
                    </Link>
                    <Link href="/services/reddit-marketing" className="block text-white hover:text-gray-300">
                      Reddit Marketing
                    </Link>
                    <Link href="/services/local-seo" className="block text-white hover:text-gray-300">
                      Local SEO
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/courses" className="text-white hover:text-gray-300">
                Courses
              </Link>
              <a href="https://serpinsider.co" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
              <a href="https://serpinsider.co" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                Newsletter
              </a>
            </div>
          </div>
        )}

        <Link href="/contact" className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;