import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import HomepageComponent from "../components/Homepage";
import { imageArray } from "../constants";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
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
<<<<<<< HEAD
      <div className="Homepage">
        <Navbar />
      </div>
=======
      <>
        <HomepageComponent item={this.state.item} />
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
