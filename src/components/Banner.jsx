import React from 'react';

const Banner = () => {
    return (
      <div className="hero bg-banner-bg bg-base-200 min-h-[600px] relative">
        <div className="flex flex-col absolute content-end">
          <div>
            <h1 className="text-white font-rancho text-5xl font-thin mb-4">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-white w-7/12 font-raleway mb-8 text-base">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
          </div>
          <div>
            <button className="px-8 py-2 bg-[#E3B577] text-black font-rancho text-2xl">Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;