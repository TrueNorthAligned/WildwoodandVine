import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, PRINT_UPGRADE_LINK } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return (
    <div className="py-24 px-6 bg-cream min-h-screen text-center">
      <h1 className="text-2xl text-forest mb-4">Product not found</h1>
      <Link to="/shop" className="text-terracotta underline">Back to Shop</Link>
    </div>
  );

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
            <h3 className="text-forest uppercase tracking-widest text-xs font-semibold">Description</h3>
            <p className="text-forest/70 font-light leading-relaxed">
              {product.description}
            </p>
            
            <h3 className="text-forest uppercase tracking-widest text-xs font-semibold">What's Included</h3>
            <ul className="space-y-2 font-light text-forest/70 list-disc list-inside">
              <li>Instant access to Canva template</li>
              <li>Fully editable text, colors, and layout</li>
              <li>Standard professional sizing</li>
              <li>Unlimited downloads and lifetime access</li>
            </ul>

            <div className="bg-sage/10 p-4 rounded-sm">
               <p className="text-forest/70 text-sm italic">
                 Canva template link will be delivered via email after purchase.
               </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <a 
              href={product.stripeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-forest text-cream py-4 uppercase tracking-widest text-sm hover:bg-sage transition-all text-center"
            >
              Buy Now (Digital)
            </a>
            <a 
              href={PRINT_UPGRADE_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-forest text-forest py-4 uppercase tracking-widest text-sm hover:bg-forest hover:text-cream transition-all text-center"
            >
              Order Printed (+$30 Upgrade)
            </a>
          </div>
          
          <p className="mt-8 text-xs text-forest/40 font-light italic">
            *This is a digital product. You will receive a link to edit in Canva via email after purchase. Printed copies require the Print Upgrade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
