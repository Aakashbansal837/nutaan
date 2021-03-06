import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ThreeItemCorousal = ({ images }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <OwlCarousel
        className="threeItemCorousal"
        loop
        margin={10}
        responsiveClass="true"
        autoplay="true"
        autoplayTimeout="7000"
        nav
        dots={true}
        navText={[
          `<div class='three-nav-btn prev-slide' style="display : ${
            show ? "block" : "none"
          }"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>`,
          `<div class='three-nav-btn next-slide' style="display : ${
            show ? "block" : "none"
          }"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>`,
        ]}
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
    </div>
  );
};

export default ThreeItemCorousal;
