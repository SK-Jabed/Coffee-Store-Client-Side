import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';
import Banner from '../components/Banner';
import AboutCoffee from '../components/AboutCoffee';

const HomePage = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
      <div>
        <Banner></Banner>
        <AboutCoffee></AboutCoffee>
        <div className="w-11/12 mx-auto">
          <p>--- Sip & Savor ---</p>
          <h2>Our Popular Products</h2>
          <button>Add Coffee</button>
        </div>

        <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-4 my-20">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    );
};

export default HomePage;