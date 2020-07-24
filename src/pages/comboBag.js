import React from "react";
import { connect } from "react-redux";
import NormalBag from "../components/shoppingBag/comboBag";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Img1 from "../images/Wishlist/1.png";
import Img9 from "../images/Wishlist/9.png";
import Img7 from "../images/Wishlist/7.png";
import Img4 from "../images/Wishlist/4.png";

class ComboBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      combo: [
        [
          {
            name: "Rust Orange",
            img: Img7,
            disc: "Women Pink Handblock Bird Print Straight Kurta",
            size: "M",
            qty: "1",
            price: "₹ 1799",
            prevP: "₹ 1999",
          },
          {
            name: "Rust Orange",
            img: Img9,
            disc: "Women Pink Handblock Bird Print Straight Kurta",
            size: "M",
            qty: "1",
            price: "₹ 1799",
            prevP: "₹ 1999",
          },
        ],
      ],
      normal: [
        {
          name: "Rust Orange",
          img: Img7,
          disc: "Women Pink Handblock Bird Print Straight Kurta",
          size: "M",
          qty: "1",
          price: "₹ 1799",
          prevP: "₹ 1999",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <NormalBag combo={this.state.combo} normal={this.state.normal} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ComboBag);
