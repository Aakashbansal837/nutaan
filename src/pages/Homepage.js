import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
<<<<<<< HEAD
=======
import HomepageComponent from "../components/Homepage";
import { imageArray } from "../constants";
>>>>>>> nutaan-frontend/master

class Homepage extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {};
=======
    this.state = {
      item: {
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
>>>>>>> nutaan-frontend/master
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="Homepage">
        <Navbar />
        <Footer />
      </div>
=======
      <>
        <Navbar />
        <HomepageComponent item={this.state.item} />
        <Footer />
      </>
>>>>>>> nutaan-frontend/master
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
