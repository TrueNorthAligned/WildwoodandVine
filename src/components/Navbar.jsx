import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-6 flex justify-between items-center border-b border-sage/20 bg-cream/80 backdrop-blur-md sticky top-0 z-50">
    <Link to="/" className="text-2xl font-serif font-bold text-forest tracking-wider">Wildwood & Vine</Link>
    <div className="space-x-8 hidden md:flex font-sans text-sm uppercase tracking-widest text-forest/70">
      <Link to="/" className="hover:text-terracotta transition-colors">Home</Link>
      <Link to="/shop" className="hover:text-terracotta transition-colors">Shop</Link>
      <Link to="/about" className="hover:text-terracotta transition-colors">About</Link>
      <Link to="/faq" className="hover:text-terracotta transition-colors">FAQ</Link>
      <Link to="/contact" className="hover:text-terracotta transition-colors">Contact</Link>
    </div>
    <button className="md:hidden text-forest">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
  </nav>
);

export default Navbar;
