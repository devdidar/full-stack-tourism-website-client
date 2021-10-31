import React, { useState, useEffect } from "react";
import "./TourGuide.css";
const TourGuide = () => {
  const [guide, setGuide] = useState([]);
  useEffect(() => {
    fetch("https://eerie-witch-93352.herokuapp.com/tourGuide")
      .then((res) => res.json())
      .then((data) => setGuide(data));
  }, []);
  return (
    <div>
      <h1 className="mt-20 mb-10 text-center font-semibold text-4xl">
        Tour Guide
      </h1>
      <div className="grid grid-cols-3 ml-12 guides">
        {guide.map((gd) => (
          <div className="guide" key={gd._id}>
            <img src={gd.img} alt="" />
            <p className="text-center font-semibold text-xl my-3">{gd.name}</p>
            <div className="guide-icon text-center">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram-square"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuide;
