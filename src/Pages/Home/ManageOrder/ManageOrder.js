import React from "react";
import "./ManageOrder.css";

const ManageOrder = ({ order }) => {
  const { name, price, img, desc, _id, status } = order;

  const handleDelete = (id) => {
    const warning = window.confirm("are you want to delete?");
    if (warning) {
      fetch(`http://localhost:5000/deleteTrip/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            window.alert("successfully deleted");
          }
        });
    }
  };
  const handleApprove = (id) => {
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {});
  };
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center trip ">
      <div className="ml-4">
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-2">{name}</h1>
        <p>{desc.slice(0, 200)}</p>
      </div>
      <div>
        <p className="text-xl">${price}</p>
        <p className="text-sm text-gray-800 my-2">per person</p>
        <p className={status === "pending" ? "pending" : "approved"}>
          {status}
        </p>
        <button
          onClick={() => handleDelete(_id)}
          className=" bg-gradient-to-r from-pink-700 to-red-800 px-4 py-2 text-white rounded"
        >
          Delete
        </button>
        <button
          onClick={() => handleApprove(_id)}
          className=" ml-3 bg-gradient-to-r from-green-700 to-green-800 px-4 py-2 text-white rounded"
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default ManageOrder;
