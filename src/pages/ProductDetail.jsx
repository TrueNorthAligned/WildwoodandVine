import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Wildflower Suite', category: 'Suite', price: 45, image: 'https://images.unsplash.com/photo-1549849171-09f62448709e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Mountain Fern Invitation', category: 'Invitation', price: 15, image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Sage & Eucalyptus RSVP', category: 'RSVP', price: 12, image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Terracotta Thank You', category: 'Thank You', price: 12, image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
  { id: 5, name: 'Forest Welcome Sign', category: 'Welcome Sign', price: 25, image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800' },
  { id: 6, name: 'Botanical Favor Tags', category: 'Favor Tag', price: 10, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="py-24 px-6 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <div className="aspect-[3/4] overflow-hidden bg-sage/10">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:w-1/2">
          <Link to="/shop" className="text-forest/40 uppercase tracking-widest text-xs mb-8 inline-block hover:text-forest transition-colors">← Back to Shop</Link>
          <h1 className="text-4xl md:text-5xl text-forest mb-4 italic">{product.name}</h1>
          <p className="text-forest/60 font-sans uppercase tracking-widest text-sm mb-6">{product.category}</p>
          <p className="text-3xl text-terracotta font-serif mb-8">Digital Template: ${product.price}</p>
          
          <div className="h-px w-full bg-forest/10 mb-8"></div>
          
          <div className="space-y-6 mb-12">
            <h3 className="text-forest uppercase tracking-widest text-xs font-semibold">What's Included</h3>
            <ul className="space-y-2 font-light text-forest/70 list-disc list-inside">
              <li>Instant access to Canva template</li>
              <li>Fully editable text, colors, and layout</li>
              <li>Sized to standard 5x7" (Invitation)</li>
              <li>Unlimited downloads and lifetime access</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4">
            <button className="bg-forest text-cream py-4 uppercase tracking-widest text-sm hover:bg-sage transition-colors">
              Buy Now (Digital)
            </button>
            <button className="border border-forest text-forest py-4 uppercase tracking-widest text-sm hover:bg-forest hover:text-cream transition-colors">
              Order Printed (from $1.50/ea)
            </button>
          </div>
          
          <p className="mt-8 text-xs text-forest/40 font-light italic">
            *This is a digital product. You will receive a link to edit in Canva immediately after purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
