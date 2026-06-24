import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-forest py-16 px-6 text-cream/80 font-sans text-sm tracking-wide">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="text-3xl font-serif text-cream mb-6 tracking-wider">Wildwood & Vine</div>
        <p className="max-w-md font-light leading-relaxed mb-8">
          Sustainable, botanical wedding stationery for the modern couple. Designed with love for nature and your special day.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-cream transition-colors underline decoration-sage/50 underline-offset-4">Instagram</a>
          <a href="#" className="hover:text-cream transition-colors underline decoration-sage/50 underline-offset-4">Pinterest</a>
        </div>
      </div>
      <div>
        <h4 className="text-cream uppercase tracking-widest mb-6 font-semibold">Shop</h4>
        <ul className="space-y-4 font-light">
          <li><Link to="/shop" className="hover:text-cream transition-colors">Invitation Suites</Link></li>
          <li><Link to="/shop" className="hover:text-cream transition-colors">Day-Of Details</Link></li>
          <li><Link to="/shop" className="hover:text-cream transition-colors">Thank You Cards</Link></li>
          <li><Link to="/shop" className="hover:text-cream transition-colors">Printed Samples</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-cream uppercase tracking-widest mb-6 font-semibold">Support</h4>
        <ul className="space-y-4 font-light">
          <li><Link to="/faq" className="hover:text-cream transition-colors">Shipping & Returns</Link></li>
          <li><Link to="/faq" className="hover:text-cream transition-colors">Canva Guide</Link></li>
          <li><Link to="/about" className="hover:text-cream transition-colors">Sustainability</Link></li>
          <li><Link to="/contact" className="hover:text-cream transition-colors">Contact Us</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 text-center text-xs opacity-50">
      &copy; 2026 Wildwood & Vine. All rights reserved.
    </div>
  </footer>
);

export default Footer;
