import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard";
import ServiceModal from "../../AddService/ServiceModal/ServiceModal";

const Countries = () => {
  const countries = [
    {
      _id: "6369f38effbe0bb1913ac456",
      name: "Switzerland",
      description:
        "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned. ",
      price: 3300,
      rating: 5,
      image: "https://i.ibb.co/z216qJQ/pexels-louis-2399391.jpg",
    },
    {
      _id: "6369f38effbe0bb1913ac457",
      name: "Japan",
      description:
        "Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south.",
      price: 1500,
      rating: 4.5,
      image: "https://i.ibb.co/tDfMx63/pexels-aleksandar-pasaric-2339009.jpg",
    },
    {
      _id: "6369f38effbe0bb1913ac458",
      name: "Turkey",
      description:
        "Turkey, officially the Republic of Turkey, is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeast Europe.",
      price: 2200,
      rating: 4.7,
      image: "https://i.ibb.co/34fGqw1/pexels-taryn-elliott-3889741.jpg",
    },
  ];
  const [serviceCountry, setServiceCountry] = useState(null);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="divider my-10"></div>
      <div className="mb-5">
        <h2 className="text-5xl text-primary font-extrabold ">
          Let's take a look
        </h2>
        <p className="text-xl">Where you want to tavel?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {countries.map((service) => (
          <ServiceCard key={service._id} service={service} setServiceCountry={setServiceCountry}></ServiceCard>
        ))}
      </div>
      {/* modal body */}
      {serviceCountry && <ServiceModal serviceCountry={serviceCountry}></ServiceModal>}
      <div className="flex justify-center mt-10">
        <Link to="/services" className="btn btn-primary px-10">
          see more
        </Link>
      </div>
      <div className="divider my-10"></div>
    </div>
  );
};

export default Countries;
