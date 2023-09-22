import { useState } from "react";
const CreateForm = () => {
  const [inputValue, changeValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    username: "",
    gender: "",
    password: "",
    rating: "",
    hobbies: "",
    city: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });
    changeValue({
      // ...changeValue,

      [name]: value,
      // ...changeValue,
    });
    console.log(changeValue);
  };
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            name="name"
            placeholder="Enter full name"
            type="text"
            value={inputValue.name}
            // value="shweta"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter email address"
            type="email"
            value={inputValue.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            name="phone"
            placeholder="Enter phone number"
            type="number"
            value={inputValue.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            name="address"
            placeholder="Enter home address"
            type="text"
            value={inputValue.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            name="username"
            placeholder="Enter username"
            type="text"
            value={inputValue.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Gender</p>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            onChange={handleChange}
            required
          ></input>
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            placeholder="Enter password"
            type="password"
            value={inputValue.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            name="rating"
            value={inputValue.rating}
            type="range"
            min="1"
            max="10"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>Hobbies:</p>
          <label>ckricket</label>
          <input
            type="checkbox"
            name="hobbies"
            value={"ckricket"}
            onChange={handleChange}
          ></input>
          <label>Drawing</label>
          <input
            type="checkbox"
            name="hobbies"
            value={"Drawing"}
            // checked={hobbies === "Drawing"}
            onChange={handleChange}
          ></input>
          <label>Reading</label>
          <input
            type="checkbox"
            name="hobbies"
            value={"Reading"}
            onChange={handleChange}
          ></input>
        </div>
        {/* <div>
          <label>City:</label>

          <select name="city">
            <option name="city" value={"pune"} onChange={handleChange}>
              pune
            </option>
            <option name="city" value={"Mumbai"} onChange={handleChange}>
              Mumbai
            </option>
            <option name="city" value={"Beed"} onChange={handleChange}>
              Beed
            </option>
            <option name="city" value={"Latur"} onChange={handleChange}>
              Latur
            </option>
            <option name="city" value={"Satara"} onChange={handleChange}>
              Satara
            </option>
          </select>
        </div> */}

        {/* <div>
          <label>Hobbies:</label>
          <label>Cricketer</label>
          <input
            type="checkbox"
            name="hobbies"
            value="Cricket"
            checked={inputValue.hobbies === "Cricket"}
            onChange={handleChange}
          />
          <label>Drawing</label>
          <input
            type="checkbox"
            name="hobbies"
            value="Drawing"
            checked={inputValue.hobbies === "Drawing"}
            onChange={handleChange}
          />
          <label>Reading</label>
          <input
            type="checkbox"
            name="hobbies"
            value="Reading"
            checked={inputValue.hobbies === "Reading"}
            onChange={handleChange}
          />
        </div> */}

        <div>
          <label>City:</label>
          <select name="city" value={inputValue.city} onChange={handleChange}>
            <option value={"pune"}>pune</option>
            <option value={"Mumbai"}>Mumbai</option>
            <option value={"Beed"}>Beed</option>
            <option value={"Latur"}>Latur</option>
            <option value={"Satara"}>Satara</option>
          </select>
        </div>
      </form>
    </div>
  );
};
export default CreateForm;
