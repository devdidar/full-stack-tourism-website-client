import React from "react";
const MyOrder = ({ order }) => {
  const { name, price, img, desc, _id } = order;

  const handleDelete = (id) => {
    const warning = window.confirm("are you want to delete?");
    if (warning) {
      fetch(`https://eerie-witch-93352.herokuapp.com/deleteMyTrip/${id}`, {
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
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center trip ">
      <div className="ml-4 order-img">
        <img src={img} alt="" />
      </div>
      <div className="title-mobile">
        <h1 className="font-semibold text-xl mb-2">{name}</h1>
        <p>{desc.slice(0, 200)}</p>
      </div>
      <div className="price-mobile">
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
