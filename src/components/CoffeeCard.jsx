import React from 'react';
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, supplier, taste, photo } = coffee;

    return (
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="flex w-full m-4 items-center justify-between">
          <div>
            <p>Name: {name}</p>
            <p>Chef: {chef}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end join join-vertical">
            <button className="btn join-item">
              View <IoEyeSharp />
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">
                Edit <MdEdit />
              </button>
            </Link>
            <button
              //   onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500"
            >
              X <MdDelete />
            </button>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;