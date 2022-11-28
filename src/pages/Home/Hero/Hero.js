import React from "react";
import heroImg from "../../../asset/hero-pic (1).png";

const Hero = () => {
  return (
    <div className="hero mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImg} className="lg:w-1/2 rounded-lg " />
        <div className="lg:w-1/2 p-3">
          <h1 className="text-5xl font-bold">
            Feel The Chill, Travel The World
          </h1>
          <p className="py-6">
            I'm a professional tourist guide. Provide tourist services all over
            the Europe and Asia. If you don't know where to start your vacation
            or which country is best for you to travel, feel free to contact
            with me.
          </p>
          <button className="btn btn-primary">Let's Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
