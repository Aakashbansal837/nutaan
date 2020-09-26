import React from "react";
import { connect } from "react-redux";
import Wishlist from "../components/wishlist";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { imageArray } from "../constants";

const DummyData = [
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Biba",
    disc: "Kurta with Palazzos and Dupatta",
    price: "₹ 1,899",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Biba",
    disc: "Kurta with Palazzos and Dupatta",
    price: "₹ 1,899",
  },
];

const initialData = [
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Biba",
    disc: "Kurta with Palazzos and Dupatta",
    price: "₹ 1,899",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Biba",
    disc: "Kurta with Palazzos and Dupatta",
    price: "₹ 1,899",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Chumbak",
    disc: "Block Printed Cotton Saree",
    price: "₹ 2,499",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Biba",
    disc: "Kurta with Palazzos and Dupatta",
    price: "₹ 1,899",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Biba",
    disc: "Kurta with Palazzos and Dupatta",
    price: "₹ 1,899",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
    name: "Biba",
    disc: "Kurta with Palazzos and Dupatta",
    price: "₹ 1,899",
  },
  {
    img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
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
