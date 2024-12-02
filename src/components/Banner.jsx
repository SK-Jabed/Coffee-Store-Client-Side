import React from 'react';

const Banner = () => {
    return (
      <div className="hero bg-banner-bg bg-base-200 min-h-[600px] relative">
        <div className="flex flex-col absolute left-96">
          <div>
            <h1 className="text-white">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-white w-7/12">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
          </div>
          <div>
            <button className="px-7 py-3 bg-red-400">Learn More</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;