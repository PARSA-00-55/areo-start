import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import ServiceModal from "../AddService/ServiceModal/ServiceModal";

const Services = () => {
  const [services, setServices] = useState([]);
  const [serviceCountry, setServiceCountry] = useState(null);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-20">
        <h2 className="text-5xl text-primary font-black">
          Available Countries
        </h2>
      </div>
      <div className="divider my-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            setServiceCountry={setServiceCountry}
          ></ServiceCard>
        ))}
      </div>
      {/* modal body */}
      {serviceCountry && (
        <ServiceModal serviceCountry={serviceCountry}></ServiceModal>
      )}
      <div className="divider my-10"></div>
    </div>
  );
};

export default Services;
