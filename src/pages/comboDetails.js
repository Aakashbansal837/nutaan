import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import ComboProduct from "../components/productDetails/Combo";
import { imageArray } from "../constants";

class ComboDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: "Western Bridal Combo",
        disc: "Red blouse, Embroidered Lehenga, Floral Dupatta",
        price: "₹ 1699",
        prevP: "₹ 2199",

        data: [
          {
            name: "Nutaan",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            disc: "Women Pink Handblock Bird Print Straight Kurta",
            price: "₹ 1,699",
            neck: "Round Neck",
            shape: "Straight",
            length: "Calf Length",
            sleeve: "No Sleeves",
            slit: "Sleeves",
            print: "Ethnic Motifs",
          },
          {
            name: "Nutaan",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            disc: "Women Embroidered Lehenga",
            price: "₹ 1,699",
            neck: "Round Neck",
            shape: "Straight",
            length: "Calf Length",
            sleeve: "No Sleeves",
            slit: "Sleeves",
            print: "Ethnic Motifs",
          },
          {
            name: "Nutaan",
            img:
              imageArray[Math.floor(Math.random() * (imageArray.length - 1))],
            disc: "Women Embroidered Lehenga",
            price: "₹ 1,699",
            neck: "Round Neck",
            shape: "Straight",
            length: "Calf Length",
            sleeve: "No Sleeves",
            slit: "Sleeves",
            print: "Ethnic Motifs",
          },
        ],

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
        <ComboProduct item={this.state.item} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ComboDetails);
