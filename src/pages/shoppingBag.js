import React from "react";
import { connect } from "react-redux";
import NormalBag from "../components/shoppingBag/normalBag";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { imageArray } from "../constants";

class ShoppingBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Rust Orange",
          img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
          disc: "Women Pink Handblock Bird Print Straight Kurta",
          size: "M",
          qty: "1",
          price: "₹ 1799",
          prevP: "₹ 1999",
        },
        {
          name: "Rust Orange",
          img: imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
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
      LoggedIn: false,
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
          LoggedIn={this.state.LoggedIn}
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
