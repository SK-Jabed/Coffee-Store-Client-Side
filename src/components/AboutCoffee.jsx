import React from 'react';
import aroma from "../../src/assets/icons/1.png"
import quality from "../../src/assets/icons/2.png"
import grades from "../../src/assets/icons/3.png"
import roasting from "../../src/assets/icons/4.png"

const AboutCoffee = () => {
    return (
      <div className="bg-[#ECEAE3]" w-full>
        <div className="w-10/12 mx-auto grid grid-cols-4 gap-8 py-14">
          <div>
            <img src={aroma} alt="" />
            <h2 className="font-rancho text-3xl text-[#331A15] mt-3 mb-1">
              Awesome Aroma
            </h2>
            <p className="text-base">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src={quality} alt="" />
            <h2 className="font-rancho text-3xl text-[#331A15] mt-3 mb-1">
              High Quality
            </h2>
            <p className="text-base">
              We serve the coffee to you maintaining the best quality
            </p>
          </div>
          <div>
            <img src={grades} alt="" />
            <h2 className="font-rancho text-3xl text-[#331A15] mt-3 mb-1">
              Pure Grades
            </h2>
            <p className="text-base">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img src={roasting} alt="" />
            <h2 className="font-rancho text-3xl text-[#331A15] mt-3 mb-1">
              Proper Roasting
            </h2>
            <p className="">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutCoffee;