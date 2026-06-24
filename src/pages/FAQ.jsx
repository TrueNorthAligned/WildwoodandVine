import React from 'react';

const FAQ = () => (
  <div className="py-24 px-6 bg-cream min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl text-forest mb-12 italic text-center">Frequently Asked Questions</h1>
      <div className="space-y-12">
        <div>
          <h3 className="text-xl text-forest mb-4 font-serif italic">How do I edit my templates?</h3>
          <p className="font-light text-forest/70 leading-relaxed">
            All our templates are designed for Canva. After purchase, you'll receive a PDF with a link. Clicking that link will open the template in your Canva account where you can edit everything from text to colors.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-forest mb-4 font-serif italic">Do I need a Canva Pro account?</h3>
          <p className="font-light text-forest/70 leading-relaxed">
            No! Our templates are designed using free Canva elements, so you can edit and download them without a Pro subscription.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-forest mb-4 font-serif italic">What are my printing options?</h3>
          <p className="font-light text-forest/70 leading-relaxed">
            You can download your edited design as a print-ready PDF and print at home or at a local print shop. Alternatively, we offer professional printing services on premium, sustainable cardstock.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;
