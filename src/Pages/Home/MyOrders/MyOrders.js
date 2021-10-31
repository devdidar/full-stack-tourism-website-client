import React, { useState, useEffect } from "react";
import MyOrder from "../MyOrder/MyOrder";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://eerie-witch-93352.herokuapp.com/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [myOrders]);
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-semibold ">
        My Orders: {myOrders.length}{" "}
      </h1>
      <div className=" grid grid-cols-1	">
        {myOrders.map((order) => (
          <MyOrder key={order._id} order={order}></MyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
