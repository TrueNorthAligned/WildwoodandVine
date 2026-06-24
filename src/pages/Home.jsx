import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-forest">
    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
    <div className="relative text-center px-4 max-w-3xl">
      <h1 className="text-5xl md:text-7xl text-cream mb-6 italic leading-tight">Beautiful, Nature-Inspired Wedding Stationery</h1>
      <p className="text-cream/90 text-lg md:text-xl font-sans mb-8 max-w-xl mx-auto font-light tracking-wide">
        Personalize your dream invitations in Canva or let us handle the premium printing for you.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link to="/shop" className="bg-terracotta text-cream px-10 py-4 font-sans text-sm uppercase tracking-widest hover:bg-forest hover:text-cream border border-terracotta transition-all duration-300">
          Browse Suites
        </Link>
        <button className="border border-cream text-cream px-10 py-4 font-sans text-sm uppercase tracking-widest hover:bg-cream hover:text-forest transition-all duration-300">
          How it Works
        </button>
      </div>
    </div>
  </section>
);

const FeaturedSuites = () => {
  const featured = [
    {
      id: 'wildflower-meadow-full-suite',
      name: 'Wildflower Meadow',
      price: 69,
      image: 'https://images.unsplash.com/photo-1549849171-09f62448709e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'moonlit-forest-full-suite',
      name: 'Moonlit Forest',
      price: 59,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'golden-hour-full-suite',
      name: 'Golden Hour',
      price: 59,
      image: 'https://images.unsplash.com/photo-1594913366159-1832ffefbb2f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-forest mb-4">The Collection</h2>
        <div className="h-1 w-20 bg-sage mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {featured.map((suite) => (
          <div key={suite.id} className="group cursor-pointer">
            <Link to={`/product/${suite.id}`}>
              <div className="overflow-hidden bg-sage/10 aspect-[3/4] mb-6 relative">
                 <div className="absolute inset-0 bg-forest/5 group-hover:bg-forest/0 transition-colors duration-500"></div>
                 <img 
                   src={suite.image} 
                   alt={suite.name} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-2xl text-forest mb-2">{suite.name}</h3>
              <p className="text-forest/60 font-sans text-sm uppercase tracking-widest mb-4">Complete Suite</p>
              <p className="text-terracotta font-serif italic text-lg">Digital Template ${suite.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section className="py-24 px-6 bg-sage/10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-forest mb-4">Crafting Your Story</h2>
        <p className="text-forest/70 font-sans italic text-lg">Three simple steps to your perfect stationery</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        <div>
          <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sage text-2xl font-serif italic">1</div>
          <h3 className="text-2xl text-forest mb-4">Choose Your Suite</h3>
          <p className="text-forest/70 font-light leading-relaxed">
            Select from our curated collection of botanical designs inspired by forests, mountains, and gardens.
          </p>
        </div>
        <div>
          <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sage text-2xl font-serif italic">2</div>
          <h3 className="text-2xl text-forest mb-4">Personalize in Canva</h3>
          <p className="text-forest/70 font-light leading-relaxed">
            Instantly edit text, colors, and layout using Canva's intuitive tools. No design experience needed.
          </p>
        </div>
        <div>
          <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sage text-2xl font-serif italic">3</div>
          <h3 className="text-2xl text-forest mb-4">Digital or Printed</h3>
          <p className="text-forest/70 font-light leading-relaxed">
            Download your files for digital sharing, or order our premium eco-conscious printing service.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSuites />
      <ProcessSection />
    </>
  );
};

export default Home;
