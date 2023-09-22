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
    date: "",
    // checkbox: "",
    color: "",
  };
  //setter
  handleChange = (e) => {
    // const { name, email, phone, address, username, password } = e.target;
    const { name, value } = e.target;

    //getter
    this.setState({
      [name]: value,
    });
    // this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
              required
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
              required
            />
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
          <div>
            <label>Date</label>
            <input
              name="date"
              placeholder="Enter password"
              type="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Color</label>
            <input
              name="color"
              placeholder="Enter password"
              type="color"
              value={this.state.color}
              onChange={this.handleChange}
              required
            />
          </div>
          {/* <div>
            <label>Status:</label>
            <label>married</label>
            <input
              name="checkbox"
              placeholder=""
              type="checkbox"
              value={this.state.ckeckbox}
              onChange={this.handleChange}
              required
            />
            <label>Unmarried</label>
            <input
              name="checkbox"
              placeholder=""
              type="checkbox"
              value={this.state.checkbox}
              onChange={this.handleChange}
              required
            />
          </div> */}

          <div>
            <label>Status:</label>
            <label>Married</label>
            <input
              type="checkbox"
              name="married"
              checked={this.state.married}
              onChange={this.handleChange}
            />
            <label>Unmarried</label>
            <input
              type="checkbox"
              name="unmarried"
              checked={this.state.unmarried}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
