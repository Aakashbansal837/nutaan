import React from "react";
import { connect } from "react-redux";
import ProfileNavbar from "../components/profile/ProfileNavbar";

import Footer from "../components/common/footer";
import Profile from "../components/profile";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProfileNavbar />
        <Profile />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
