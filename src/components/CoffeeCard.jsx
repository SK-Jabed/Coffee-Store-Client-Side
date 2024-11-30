import React from "react";
import { data, Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-ten-ashen.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

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
            onClick={() => handleDelete(_id)}
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
