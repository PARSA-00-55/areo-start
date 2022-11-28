import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Hero from "../Hero/Hero";
import Status from "../Status/Status";
import Testimonial from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <Status></Status>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
