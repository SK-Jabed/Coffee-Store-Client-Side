import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';

const HomePage = () => {
    const coffees = useLoaderData();

    return (
      <div>
        <div className='w-11/12 mx-auto'>
          <p>--- Sip & Savor ---</p>
          <h2>Our Popular Products</h2>
          <button>Add Coffee</button>
        </div>

        <div className='w-11/12 mx-auto grid md:grid-cols-2 gap-4 my-20'>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    );
};

export default HomePage;