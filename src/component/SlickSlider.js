import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const settings = {
    dots: true,  // To show dots for pagination on mobile
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Show 4 items by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Below this breakpoint, show 1 item
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    arrows: true, // Arrows for desktop
    swipe: true,  // Enable swipe for mobile
  };

  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-200 p-6 text-center">{item}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
