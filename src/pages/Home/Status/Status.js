import React from "react";

const Status = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r border-gray-700">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Register Users
          </p>
        </div>
        <div className="text-center md:border-r border-gray-700">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">576</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            PROVIDED SERVICES
          </p>
        </div>
        <div className="text-center md:border-r border-gray-700">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">18</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            TOTAL SERVICE
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">10</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            COUNTRY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
