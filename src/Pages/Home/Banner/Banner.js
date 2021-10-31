import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" flex justify-between items-center">
      <div className="ml-12">
        <h2 className="text-5xl my-2">Explore</h2>
        <h2 className="text-5xl">The World</h2>
        <p>
          Travel is fatal to prejudice, bigotry, and narrow mindedness, and many
          of our people need it sorely on these accounts.
        </p>
        <Link to="/trips">
          <button className="bg-indigo-800 text-white px-3 py-2 rounded my-3">
            Book a Trip
          </button>
        </Link>
      </div>

      <div>
        <img
          src="https://i.ibb.co/61pQtnj/banner.png"
          alt=""
          className="banner-img inline-block"
        />
      </div>
    </div>
  );
};

export default Banner;
