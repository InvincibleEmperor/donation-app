import React from "react";
import Outer from "../component/HOC/Outer";
import BannerImage from "../assets/donation-banner.webp";

const Donation = () => {
  return (
    <Outer>
      <div className="relative">
        <img
          src={BannerImage}
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </Outer>
  );
};

export default Donation;
