import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const FiveItemCorousal = ({ images }) => {
  return (
    <OwlCarousel
      loop
      margin={10}
      nav
      autoplay
      autoplayTimeout="1000"
      responsiveClass
      responsive={{
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
      }}
    >
      {images.map((img) => (
        <div className="item">
          <img src={img} alt="product detail" />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default FiveItemCorousal;
