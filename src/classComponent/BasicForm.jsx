import { Component } from "react";
class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    username: "",
    password: "",
    gender: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              placeholder="Enter full name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              placeholder="Enter email address"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              name="phone"
              placeholder="Enter phone number"
              type="number"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input
              name="address"
              placeholder="Enter home address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Username</label>
            <input
              name="username"
              placeholder="Enter username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <p>Gender</p>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              required
            ></input>
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              required
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              placeholder="Enter password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
