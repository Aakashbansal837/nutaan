import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import ComboProduct from "../components/productDetails/Combo";

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
