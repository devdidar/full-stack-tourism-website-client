import React from "react";
const MyOrder = ({ order }) => {
  const { name, price, img, desc, _id } = order;

  const handleDelete = (id) => {
    const warning = window.confirm("are you want to delete?");
    if (warning) {
      fetch(`http://localhost:5000/deleteMyTrip/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {

          console.log(data)
        });
    }
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
        <button
          onClick={() => handleDelete(_id)}
          className=" bg-gradient-to-r from-pink-700 to-red-800 px-4 py-2 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyOrder;
