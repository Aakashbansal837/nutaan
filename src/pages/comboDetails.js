import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import ComboProduct from "../components/productDetails/Combo";
import Img1 from "../images/Wishlist/1.png";
import Img2 from "../images/Wishlist/2.png";
import Img3 from "../images/Wishlist/3.png";
import Img4 from "../images/Wishlist/4.png";
import Img5 from "../images/Wishlist/5.png";
import Img6 from "../images/Wishlist/6.png";
import Img7 from "../images/Wishlist/7.png";

class ComboDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: "Western Bridal Combo",
        disc: "Red blouse, Embroidered Lehenga, Floral Dupatta",
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
        images: [Img1, Img2, Img3, Img4, Img5, Img6, Img7],
      },
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <ComboProduct item={this.state.item} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ComboDetails);
