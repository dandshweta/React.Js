import { Component } from "react";
class ClassCompEx extends Component {
  state = {
    uName: "",
    mail: "",
    Addr: "",
    password: "",
    checkbox: "",
  };
  render() {
    return (
      <div>
        <div className="form">
          <p>NAME:</p>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.uName}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ uName: e.target.value });
            }}
          />
          <p>GMAIL:</p>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.mail}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ mail: e.target.value });
            }}
          />
          <p>Adress:</p>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.Addr}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ Addr: e.target.value });
            }}
          />
          <p>Password:</p>
          <input
            type="text"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ password: e.target.value });
            }}
          />
          <p>Branch:</p>
          <input
            type="checkbox"
            name="first"
            value={this.state.checkbox}
          ></input>
          <label>CE</label>
          <input
            type="checkbox"
            name="first"
            value={this.state.checkbox}
          ></input>
          <label>ELCT</label>
        </div>
      </div>
    );
  }
}
export default ClassCompEx;
