import React from 'react';

const Contact = () => (
  <div className="py-24 px-6 bg-cream min-h-screen text-center">
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl md:text-6xl text-forest mb-8 italic">Get in Touch</h1>
      <p className="text-forest/70 mb-12 font-light">
        Have a question about a suite or need help with your template? We're here to help.
      </p>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full p-4 bg-transparent border border-forest/20 focus:border-forest outline-none transition-colors" />
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-transparent border border-forest/20 focus:border-forest outline-none transition-colors" />
        <textarea placeholder="How can we help?" rows="5" className="w-full p-4 bg-transparent border border-forest/20 focus:border-forest outline-none transition-colors"></textarea>
        <button className="bg-forest text-cream w-full py-4 uppercase tracking-widest text-sm hover:bg-sage transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
