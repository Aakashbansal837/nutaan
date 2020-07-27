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
      orderPlaced: false,
      addr: [
        {
          name: "Aakash",
          contact: "9874563210",
          pin: "00110011",
          fullAddr: "12/F Golden Avenue",
          city: "YNR",
          state: "Haryana",
        },
        {
          name: "Ashu",
          contact: "0022336688",
          pin: "00110011",
          fullAddr: "12/F Golden Avenue",
          city: "YNR",
          state: "Haryana",
        },
      ],
      selectedAddress: {},
    };
  }

  PlaceOrderClicked = () => {
    this.setState({ orderPlaced: true });
  };
  ChangeOrderClicked = () => {
    this.setState({ orderPlaced: false });
  };
  ChangeSelectedAddress = (value) => {
    this.setState({ selectedAddress: this.state.addr[parseInt(value)] });
    console.log("selected Addr :", this.state.selectedAddress);
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
          addr={this.state.addr}
          ChangeSelectedAddress={this.ChangeSelectedAddress.bind(this)}
          selectedAddress={this.state.selectedAddress}
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
