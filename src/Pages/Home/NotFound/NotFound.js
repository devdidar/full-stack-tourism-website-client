import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="text-center mt-20 notFond-img">
        <img
          src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg"
          alt=""
          className="inline-block mb-3"
        />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="bg-indigo-800 text-white px-4 py-2 rounded ">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
