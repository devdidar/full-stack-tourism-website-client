import React, { useState, useEffect } from "react";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManageOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);
  useEffect(() => {
    fetch("https://eerie-witch-93352.herokuapp.com/bookedTrip")
      .then((res) => res.json())
      .then((data) => {
        setManageOrders(data);
      });
  }, [manageOrders]);
  return (
    <div className="mt-10 mb-56">
      <h1 className="text-center text-3xl font-semibold ">
        All  Orders: {manageOrders.length}
      </h1>
      <div className=" grid grid-cols-1	">
        {manageOrders.map((order) => (
          <ManageOrder key={order._id} order={order}></ManageOrder>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
