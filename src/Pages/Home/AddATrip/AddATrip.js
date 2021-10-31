import React from "react";
import { useForm } from "react-hook-form";
import "./AddATrip.css";

const AddATrip = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(" http://localhost:5000/addATrip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          window.alert("Added Successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-24 font-semibold text-xl">
        Where do you want to go?
      </h1>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Trip Name"
          />
          <input
            {...register("desc", { required: true })}
            placeholder="Trip Description"
          />
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Trip Price"
          />
          <input
            {...register("img", { required: true })}
            placeholder="img URL"
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            type="submit"
            value="Add"
            className="bg-indigo-800 text-white px-4 py-2 rounded cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddATrip;
