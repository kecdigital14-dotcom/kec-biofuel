'use Client';

import React from 'react';

const HeroBanner = ({ backgroundImage, children }) => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-8">
        <div className="text-white max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
