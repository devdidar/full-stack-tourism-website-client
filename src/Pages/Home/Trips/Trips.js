import React, { useState, useEffect } from "react";
import Trip from "../Trip/Trip";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-semibold ">Our Trip Package </h1>
      <div className=" grid grid-cols-1	">
        {trips.map((trip) => (
          <Trip key={trip._id} trip={trip}></Trip>
        ))}
      </div>
    </div>
  );
};

export default Trips;
