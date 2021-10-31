import React from "react";
import { Link } from "react-router-dom";
import "./Trip.css";
const Trip = ({ trip }) => {
  const { name, price, _id, img, desc } = trip;
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center trip ">
      <div className="ml-4">
        <img src={img} alt="" />
      </div>
      <div className="title-mobile">
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <p>{desc.slice(0, 200)}</p>
      </div>
      <div className="price-mobile">
        <p className="text-xl">${price}</p>
        <p className="text-sm text-gray-800 my-2">per person</p>
        <Link to={`/tripDetails/${_id}`}>
          <button className="bg-gradient-to-r from-purple-700 to-blue-800 px-4 py-2 text-white rounded">
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trip;
