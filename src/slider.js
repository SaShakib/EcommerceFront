import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const sliderItem = [
  {
    id: 1,
    image: "hello world",
    img: "2nd row",
  },

  { id: 2, image: "hi", img: "hhh" },
  {
    id: 1,
    image: "hello world",
    img: "2nd row",
  },
  {
    id: 1,
    image: "hello world",
    img: "2nd row",
  },
  {
    id: 1,
    image: "hello world",
    img: "2nd row",
  },
  {
    id: 1,
    image: "hello world",
    img: "2nd row",
  },
];
function Sliders() {
  const item = sliderItem.map((item, key) => (
    <div>
      {" "}
      <h1 key={item.id.toString()}>{item.image}</h1>
      <h1 key={item.id.toString()}>{item.img}</h1>
    </div>
  ));
  return <Slider {...settings}>{item}</Slider>;
}

export default Sliders;
