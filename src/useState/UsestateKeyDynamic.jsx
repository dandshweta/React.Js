import { useState } from "react";
const FormV5 = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const onInputChange = (e) => {
    //console.log("e:", e);
    //console.log("e:", e.target);
    //console.log("Value: ", e.target.value, e.target.name, e.target.type);
    const { name, value } = e.target;

    console.log({ name, value });

    // First Way - Normal way
    setProfile({ ...profile, [name]: value });
    // const o = {...i, [key]:'Europe'}

    // Second way - Best way
  };

  return (
    <div>
      <div className="form-element">
        <p>Name : {profile.name} </p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={profile.name}
          onChange={onInputChange}
          //onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="form-element">
        <p>Email : {profile.email}</p>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={profile.email}
          onChange={onInputChange}
        />
      </div>

      <div className="form-element">
        <p>Password : {profile.email}</p>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={profile.password}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default FormV5;
