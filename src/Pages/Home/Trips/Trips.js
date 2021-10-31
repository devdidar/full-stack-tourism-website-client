import React, { useState, useEffect } from "react";
import Trip from "../Trip/Trip";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://eerie-witch-93352.herokuapp.com/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .finally(setIsLoading(false));
  }, []);
  if (isLoading) {
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-blue-400 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-blue-400 rounded"></div>
              <div className="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
