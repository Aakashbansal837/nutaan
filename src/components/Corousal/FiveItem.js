import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const FiveItemCorousal = ({ items }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <OwlCarousel
        loop
        margin={10}
        autoplay
        autoplayTimeout="4000"
        responsiveClass
        nav
        navText={[
          `<div class='nav-btn prev-slide' style="display : ${
            show ? "block" : "none"
          }"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>`,
          `<div class='nav-btn next-slide' style="display : ${
            show ? "block" : "none"
          }"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>`,
        ]}
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
        {items.map((item) => (
          <div className="item">
            <img src={item.img} alt="product detail" />
            <div className="card-body wishlist-card-body">
              <p className="card-title wishlist-card-title">{item.name}</p>
              <p className="card-text wishlist-card-text">{item.disc}</p>
              <p className="card-text wishlist-card-title">{item.price}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default FiveItemCorousal;
