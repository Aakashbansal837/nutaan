import React from "react";
import { connect } from "react-redux";
import Wishlist from "../components/wishlist";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Img1 from "../images/Wishlist/1.png";
import Img2 from "../images/Wishlist/2.png";
import Img3 from "../images/Wishlist/3.png";
import Img4 from "../images/Wishlist/4.png";
import Img5 from "../images/Wishlist/5.png";
import Img6 from "../images/Wishlist/6.png";
import Img7 from "../images/Wishlist/7.png";
import Img8 from "../images/Wishlist/8.png";
import Img9 from "../images/Wishlist/9.png";
import Img10 from "../images/Wishlist/10.png";

const DummyData = [
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
    img: Img7,
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
];

const initialData = [
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
];

class Wishlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InitialData: initialData,
      DummyData: DummyData,
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <Wishlist data={this.state} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlists);
