import React from "react";
import Slider from "react-slick";
import { TopMealsData } from "../../Data/TopMealsData";
import CarouselItem from "../CarouselItem/CarouselItem";
const MultipleItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        {TopMealsData.map((item) => (
          <CarouselItem pics={item.image} brand={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItemCarousel;
