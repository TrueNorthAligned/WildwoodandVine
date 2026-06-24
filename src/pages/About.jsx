import React from 'react';

const About = () => (
  <div className="py-24 px-6 bg-cream min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl text-forest mb-12 italic text-center">Our Story</h1>
      <div className="prose prose-forest mx-auto font-light leading-relaxed space-y-6 text-forest/80">
        <p>
          Wildwood & Vine was born from a love for the natural world and a desire to make beautiful, designer wedding stationery accessible to every couple.
        </p>
        <p>
          We believe that your wedding invitations should be as unique as your love story, but they shouldn't cost the earth—literally or figuratively. That's why we focus on eco-conscious digital templates and sustainable printing practices.
        </p>
        <h2 className="text-2xl text-forest font-serif italic mt-12">Our Commitment</h2>
        <p>
          Every design in our collection is inspired by the wild beauty of nature—from the rugged mountains of the Pacific Northwest to the delicate wildflowers of a summer meadow.
        </p>
        <p>
          By choosing digital templates, you reduce waste and have complete creative control. And if you choose to print with us, we use recycled papers and soy-based inks whenever possible.
        </p>
      </div>
    </div>
  </div>
);

export default About;
