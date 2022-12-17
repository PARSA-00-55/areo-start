import React from 'react';
import { FaStar } from "react-icons/fa";

const ServiceModal = ({serviceCountry}) => {
    const { name, description, price, rating, image } = serviceCountry;
    return (
        <>
         <input type="checkbox" id="service-modal" className="modal-toggle" />
        <div className="modal ">
        <div className="modal-box relative">
            <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <figure>
            <img src={image} alt="" className='mt-8 mb-3  rounded-xl h-[20rem] w-full'/>
            </figure>
            <h3 className="text-4xl font-bold">{name}</h3>
            <div className='flex justify-between align-middle items-center mt-3'>
                <div>Cost : ${price}</div>
                <p className='flex mr-2'>My Choice: <span className="flex align-middle justify-center items-center">
              &nbsp; &nbsp;<FaStar></FaStar>&nbsp;
              {rating}
            </span></p>
            </div>
            <p className="py-4">{description}</p>
        </div>
        </div>
        </>
    );
};

export default ServiceModal;