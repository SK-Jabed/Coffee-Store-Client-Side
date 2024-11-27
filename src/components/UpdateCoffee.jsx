import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, chef, supplier, taste, photo } = coffee;

    return (
        <div>
            <h2>Updated Coffee Here: {name}</h2>
        </div>
    );
};

export default UpdateCoffee;