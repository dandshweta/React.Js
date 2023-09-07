import { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("1. Contructor Loaded");
  }

  componentDidMount() {
    console.log("3.The component is ready to work");
  }

  render() {
    console.log("2. I'm rendering now");
    return (
      <div>
        <div>
          <p>This is a class component</p>
        </div>
      </div>
    );
  }
}

export default Lifecycle;
