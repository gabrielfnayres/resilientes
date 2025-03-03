"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, children, onClick, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-gray-600 hover:text-gray-800 transition-all duration-300 group ${className || ''}`}
    >
      {children}
      <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 rounded bg-AzulCeu transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-100 font-poppins sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-5 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black select-none hover:text-gray-800 transition-all duration-300 font-noto-serif">Resilientes</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12 text-black">
          <div className="flex items-center space-x-12">
            <NavLink href="/sobre-nos">Sobre Nós</NavLink>
            <NavLink href="/texto">Manifesto</NavLink>
            <NavLink href="/rede-sus">Rede do SUS</NavLink>
          </div>
          <Link href="/autocuidado" className="border-2 border-AzulCeu rounded-full px-6 py-2 text-AzulCeu hover:bg-AzulCeu hover:text-white transition-all duration-300 flex items-center">
            Programa de Autocuidado
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-black hover:text-gray-800 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col space-y-4 px-4 py-6">
          <NavLink 
            href="/sobre-nos" 
            onClick={closeMenu}
            className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} delay-100`}
          >
            Sobre Nós
          </NavLink>
          <NavLink 
            href="/texto" 
            onClick={closeMenu}
            className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} delay-200`}
          >
            Manifesto
          </NavLink>
          <NavLink 
            href="/rede-sus" 
            onClick={closeMenu}
            className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} delay-300`}
          >
            Rede do SUS
          </NavLink>
          <Link 
            href="/autocuidado" 
            onClick={closeMenu}
            className={`border-2 border-AzulCeu rounded-full px-6 py-2 text-AzulCeu hover:bg-AzulCeu hover:text-white transition-all duration-300 flex items-center justify-center transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} delay-400`}
          >
            Programa de Autocuidado
          </Link>
        </div>
      </div>
    </nav>
  );
}