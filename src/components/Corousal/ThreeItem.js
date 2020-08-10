import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ThreeItemCorousal = ({ images }) => {
  return (
    <OwlCarousel
      // className="threeItemCorousal"
      loop
      margin={10}
      nav
      responsiveClass="true"
      autoplay="true"
      autoplayTimeout="2000"
      responsive={{
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 3,
        },
      }}
    >
      {images.map((img) => {
        return (
          <div class="item">
            <img src={img} alt="product detail" />
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default ThreeItemCorousal;
