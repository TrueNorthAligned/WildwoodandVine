import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Wildflower Suite', category: 'Suite', price: 45, image: 'https://images.unsplash.com/photo-1549849171-09f62448709e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Mountain Fern Invitation', category: 'Invitation', price: 15, image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Sage & Eucalyptus RSVP', category: 'RSVP', price: 12, image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Terracotta Thank You', category: 'Thank You', price: 12, image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: 5, name: 'Forest Welcome Sign', category: 'Welcome Sign', price: 25, image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800' },
  { id: 6, name: 'Botanical Favor Tags', category: 'Favor Tag', price: 10, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800' },
];

const Shop = () => {
  return (
    <div className="py-24 px-6 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-forest mb-4 italic">The Shop</h1>
          <p className="text-forest/70 font-sans tracking-widest uppercase text-sm">Browse our botanical collections</p>
          <div className="h-px w-20 bg-sage mx-auto mt-8 opacity-30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden bg-sage/10 aspect-[3/4] mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-cream font-sans uppercase tracking-widest text-sm border-b border-cream">View Details</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl text-forest mb-1">{product.name}</h3>
                    <p className="text-forest/50 font-sans text-xs uppercase tracking-widest">{product.category}</p>
                  </div>
                  <p className="text-terracotta font-serif italic">from ${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
