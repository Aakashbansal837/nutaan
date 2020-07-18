import React from "react";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import Img1 from "../../images/Wishlist/1.png";
import Img2 from "../../images/Wishlist/2.png";
import Img3 from "../../images/Wishlist/3.png";
import Img4 from "../../images/Wishlist/4.png";
import Img5 from "../../images/Wishlist/5.png";
import Img6 from "../../images/Wishlist/6.png";
import Img7 from "../../images/Wishlist/7.png";
import Img8 from "../../images/Wishlist/8.png";
import Img9 from "../../images/Wishlist/9.png";
import Img10 from "../../images/Wishlist/10.png";
import { Button } from "@material-ui/core";

const ImageContainer = (props) => {
  return (
    <div className="wishlist-card">
      <div className="card">
        <Close
          onClick={() => props.RemoveItem(props.item)}
          className="wishlist-card-close"
        />
        <img
          className="wishlist-card-img"
          src={props.item.img}
          alt="wishlist card"
        />

        <div className="card-body wishlist-card-body">
          <p className="card-title wishlist-card-title">{props.item.name}</p>
          <p className="card-text wishlist-card-text">{props.item.disc}</p>
          <p className="card-text wishlist-card-title">{props.item.price}</p>
        </div>
        <utton className="btn btn-outlined wishlist-card-button">
          Add to Bag
        </utton>
      </div>
    </div>
  );
};

const Wishlist = () => {
  var [Imagelist, setImageList] = React.useState([
    {
      img: Img1,
      name: "Chumbak",
      disc: "Block Printed Cotton Saree",
      price: "₹ 2,499",
    },
    {
      img: Img2,
      name: "Chumbak",
      disc: "Block Printed Cotton Saree",
      price: "₹ 2,499",
    },
    {
      img: Img3,
      name: "Chumbak",
      disc: "Block Printed Cotton Saree",
      price: "₹ 2,499",
    },
    {
      img: Img4,
      name: "Chumbak",
      disc: "Block Printed Cotton Saree",
      price: "₹ 2,499",
    },
    {
      img: Img5,
      name: "Biba",
      disc: "Kurta with Palazzos and Dupatta",
      price: "₹ 1,899",
    },
    {
      img: Img6,
      name: "Biba",
      disc: "Kurta with Palazzos and Dupatta",
      price: "₹ 1,899",
    },
    {
      img: Img7,
      name: "Chumbak",
      disc: "Block Printed Cotton Saree",
      price: "₹ 2,499",
    },
    {
      img: Img8,
      name: "Chumbak",
      disc: "Block Printed Cotton Saree",
      price: "₹ 2,499",
    },
    {
      img: Img9,
      name: "Biba",
      disc: "Kurta with Palazzos and Dupatta",
      price: "₹ 1,899",
    },
    {
      img: Img10,
      name: "Biba",
      disc: "Kurta with Palazzos and Dupatta",
      price: "₹ 1,899",
    },
    {
      img: Img3,
      name: "Biba",
      disc: "Kurta with Palazzos and Dupatta",
      price: "₹ 1,899",
    },
    {
      img: Img7,
      name: "Biba",
      disc: "Kurta with Palazzos and Dupatta",
      price: "₹ 1,899",
    },
  ]);
  var [loading, setLoading] = React.useState(false);

  const RemoveItem = (data) => {
    var list = Imagelist.filter((item) => item !== data);
    setImageList(list);
  };
  const LoadMoreData = () => {
    setLoading(true);
    setTimeout(function () {
      setImageList(Imagelist.concat(DummyData));
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="shoping"></div>
      <Footer />
    </div>
  );
};

export default Wishlist;
