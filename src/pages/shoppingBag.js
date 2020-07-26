import React from "react";
import { connect } from "react-redux";
import NormalBag from "../components/shoppingBag/normalBag";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Img7 from "../images/Wishlist/7.png";
import Img4 from "../images/Wishlist/4.png";

class ShoppingBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
          img: Img4,
          disc: "Women Pink Handblock Bird Print Straight Kurta",
          size: "M",
          qty: "1",
          price: "₹ 1799",
          prevP: "₹ 1999",
        },
      ],
      orderPlaced: true,
    };
  }

  PlaceOrderClicked = () => {
    this.setState({ orderPlaced: true });
  };
  ChangeOrderClicked = () => {
    this.setState({ orderPlaced: false });
  };

  render() {
    return (
      <div>
        <Navbar />
        <NormalBag
          items={this.state.data}
          ChangeOrderClicked={() => this.ChangeOrderClicked()}
          PlaceOrderClicked={() => this.PlaceOrderClicked()}
          OrderPlaced={this.state.orderPlaced}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
