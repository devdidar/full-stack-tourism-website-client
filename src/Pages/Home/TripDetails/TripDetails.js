import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./TripDetails.css";
const TripDetails = () => {
  const { user } = useAuth();
  const [tripDetails, setTripDetails] = useState({});
  const postTripDetails = {
    name: tripDetails.name,
    img: tripDetails.img,
    price: tripDetails.price,
    desc: tripDetails.desc,
  };
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://eerie-witch-93352.herokuapp.com/trip/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTripDetails(data);
      });
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    const userDetails = {
      ...data,
      ...postTripDetails,
    };
    fetch("https://eerie-witch-93352.herokuapp.com/bookATrip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("ordered successful");
          reset();
        }
      });
  };

  return (
    <div>
      <div className="flex items-center tripDetails gap-10 ">
        <div>
          <img src={tripDetails?.img} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{tripDetails?.name}</h1>
          <p className="my-3">{tripDetails?.desc}</p>
          <p className="text-3xl">${tripDetails.price}</p>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-24 font-semibold text-xl">
          Fill Up The Form
        </h1>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register("userName", { required: true })}
            />
            <input
              defaultValue={user.email}
              {...register("userEmail", { required: true })}
            />
            <input
              {...register("address", { required: true })}
              placeholder="Enter Your Address"
            />
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="Enter Your Phone Number"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              type="submit"
              value="Place Order"
              className="bg-indigo-800 text-white px-4 py-2 rounded cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
