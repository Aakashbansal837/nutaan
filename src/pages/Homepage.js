import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import HomepageComponent from "../components/Homepage";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <HomepageComponent />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
