import React, { Component } from "react";
import { Breadcrumb } from "matx";
import SimpleForm from "../material-kit/forms/SimpleForm";
import UserProfileComp from "../components/user/UserProfile";

class UserProfile extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Forms", path: "/forms" },
              { name: "Profile" }
            ]}
          />
        </div>
        <UserProfileComp />
      </div>
    );
  }
}

export default UserProfile;
