import React from "react";
import { connect } from "react-redux";

import Product from "../components/productDetails";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { imageArray } from "../constants";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: "Rust Orange",
        disc: "Women Pink Handblock Bird Print Straight Kurta",
        price: "₹ 1699",
        prevP: "₹ 2199",
        neck: "Round Neck",
        shape: "Straight",
        length: "Calf Length",
        sleeve: "No Sleeves",
        slit: "Sleeves",
        print: "Ethnic Motifs",
        occasion: "Daily",
        material: "Machine Wash",
        season: "Summer",
        fit: "Skinny",
        color: [
          "#FF6060",
          "#77E0C9",
          "#79CCEC",
          "#FF9956",
          "#FF9956",
          "#FF9956",
          "#FF9956",
        ],
        size: [
          ["s", "5"],
          ["m", "2"],
          ["l", "0"],
          ["xl", "10"],
        ],
        images: [
          imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
        ],
        similarProduct: [
          {
            name: "BIBA",
            disc: "Kurta with Palazzos and Dupatta",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            price: "₹ 1,899",
          },
          {
            name: "BIBA",
            disc: "Kurta with Palazzos and Dupatta",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            price: "₹ 1,899",
          },
          {
            name: "BIBA",
            disc: "Kurta with Palazzos and Dupatta",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            price: "₹ 1,899",
          },
          {
            name: "BIBA",
            disc: "Kurta with Palazzos and Dupatta",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            price: "₹ 1,899",
          },
          {
            name: "BIBA",
            disc: "Kurta with Palazzos and Dupatta",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            price: "₹ 1,899",
          },
          {
            name: "BIBA",
            disc: "Kurta with Palazzos and Dupatta",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            price: "₹ 1,899",
          },
          {
            name: "BIBA",
            disc: "Kurta with Palazzos and Dupatta",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            price: "₹ 1,899",
          },
        ],
      },
    };
  }
  render() {
    return (
      <>
        <Navbar />
        <Product item={this.state.item} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
