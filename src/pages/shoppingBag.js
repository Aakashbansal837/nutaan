import React from "react";
import { connect } from "react-redux";
import NormalBag from "../components/shoppingBag/normalBag";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

class ShoppingBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <NormalBag data={this.state} />
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
