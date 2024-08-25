import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/banerjiea");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }
  render() {
    //console.log(this.props.name + "Child Render");
    // const { name, location } = this.props; //Destructuring
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button> */}
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @banerjiea</h4>
      </div>
    );
  }
}
export default UserClass;
