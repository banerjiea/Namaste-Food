import React from "react";

import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    //  console.log("Parent Constructor");
  }
  componentDidMount() {
    //  console.log("Parent Component Did Mount");
  }
  render() {
    //  console.log("Parent Render");
    return (
      <div>
        <h1>This is About Us page</h1>
        <User name={"Samik"} />
        <UserClass name={"Soubhik"} location={"Kolkata"} />
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-xl ">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/*Lifecycle Check for multiple children 
         <UserClass name={"Samik"} location={"Kolkata"} /> */}
      </div>
    );
  }
}

export default About;
