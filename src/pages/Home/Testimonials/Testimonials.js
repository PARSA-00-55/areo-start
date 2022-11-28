import React from "react";
import Review from "./Review";
import people1 from "../../../asset/people1.png";
import people2 from "../../../asset/people2.png";
import people3 from "../../../asset/people3.png";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
  ];

  return (
    <section className="my-16 mt-[10rem]">
      <div className="my-10 ml-8">
        <div>
          <h4 className="text-xl text-primary font-black">Testimonial</h4>
          <h2 className="text-2xl">What our client Says</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
