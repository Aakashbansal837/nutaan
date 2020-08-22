import React from "react";
import { connect } from "react-redux";
import ProfileNavbar from "../components/profile/ProfileNavbar";
import ProfileOptionNavbar from "../components/profile/ProfileOptionNavbar";

import Footer from "../components/common/footer";
import Profile from "../components/profile";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      selectedOption: "none",
      active: 1,
      option: 0,
      viewDetail: -1,
    };
  }

  changeHide = (value) => {
    this.setState({ hide: value, option: 0 });
  };

  changeOption = (value) => {
    this.setState({ selectedOption: value, hide: false });
  };
  setActive = (value) => {
    this.setState({ active: value });
  };

  setOption = (value) => {
    this.setState({ option: value });
  };

  setviewDetail = (value) => {
    this.setState({ viewDetail: value });
  };
  render() {
    return (
      <div>
        {this.state.hide ? (
          <ProfileNavbar />
        ) : (
          <ProfileOptionNavbar
            selectedOption={this.state.selectedOption}
            viewDetail={this.state.viewDetail}
            changeHide={(value) => {
              this.changeHide(value);
            }}
          />
        )}
        <Profile
          active={this.state.active}
          setActive={this.setActive.bind(this)}
          option={this.state.option}
          setOption={this.setOption.bind(this)}
          changeOption={this.changeOption.bind(this)}
          viewDetail={this.state.viewDetail}
          setviewDetail={this.setviewDetail.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
