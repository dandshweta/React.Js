import { useState } from "react";

const Childprop = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const FirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const LastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = () => {
    const Data = { firstName, lastName };
    console.log("my name is ", Data);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <div>
        <h2>Enter Your Information</h2>
        <label>
          First Name:
          <input
            type="text"
            placeholder="fname"
            onChange={FirstNameChange}
            value={firstName}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            placeholder="lname"
            onChange={LastNameChange}
            value={lastName}
          />
        </label>

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <div>FirstName: {firstName}</div>
      <div>LastName: {lastName}</div>
    </>
  );
};

export default Childprop;
