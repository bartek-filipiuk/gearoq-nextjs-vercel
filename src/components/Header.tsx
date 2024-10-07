'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { FaXTwitter, FaYoutube, FaBars, FaXmark } from 'react-icons/fa6';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="py-4 md:py-6 relative z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-4 text-white hover:opacity-75 transition-opacity"
          prefetch={false}
        >
          <img src="/auto.svg" alt="GEAROQ Logo" className="h-10 w-10 md:h-12 md:w-12" />
          <span className="text-2xl md:text-3xl font-semibold text-white">GEAROQ</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-lg font-medium text-white hover:underline" prefetch={false}>
            O nas
          </Link>
          <Link href="https://twitter.com/youraccount" className="text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="h-6 w-6" />
          </Link>
          <Link href="https://youtube.com/yourchannel" className="text-white hover:text-red-600" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="h-6 w-6" />
          </Link>
          <Link href="/contact" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 px-4 rounded">Napisz do mnie</button>
          </Link>
        </div>

        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } md:hidden`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile menu */}
        <div 
          className={`fixed top-0 right-0 bottom-0 w-64 bg-gray-900 p-6 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full">
            <nav className="flex flex-col gap-6 mb-auto">
              <Link href="#" className="text-lg font-medium text-white hover:text-blue-400" prefetch={false}>
                O nas
              </Link>
              <Link href="/contact" className="text-lg font-medium text-white hover:text-blue-400" prefetch={false}>
                Kontakt
              </Link>
            </nav>
            <div className="mt-auto">
              <div className="flex justify-center gap-6 mb-6">
                <Link href="https://twitter.com/youraccount" className="text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="h-6 w-6" />
                </Link>
                <Link href="https://youtube.com/yourchannel" className="text-white hover:text-red-600" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="h-6 w-6" />
                </Link>
              </div>
              <Link href="/contact" passHref>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 px-4 rounded">Napisz do mnie</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;