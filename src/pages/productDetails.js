import React from "react";
import Product from "../components/productDetails";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

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
      },
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <Product item={this.state.item} />
        <Footer />
      </div>
    );
  }
}

export default ProductDetails;
