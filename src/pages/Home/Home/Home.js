import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Countries from "../Countries/Countries";
import Hero from "../Hero/Hero";
import Status from "../Status/Status";
import Testimonial from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <Status></Status>
      <Countries></Countries>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
