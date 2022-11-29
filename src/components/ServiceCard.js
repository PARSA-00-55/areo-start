import React from "react";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { name, description, price, rating, image } = service;

  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-[20rem] w-[25rem]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{name}</h2>
        <p>{`${description.slice(0, 150)}...`}</p>
        <div className="flex justify-between w-full ml-5">
          <div className=" flex justify-between align-middle items-center">
            <span>My choice:</span>
            <span className="flex align-middle justify-center items-center">
              &nbsp; &nbsp;<FaStar></FaStar>&nbsp;
              {rating}
            </span>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
