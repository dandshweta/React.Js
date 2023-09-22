import { useState } from "react";
import RegistrationDisplay from "./child5";

function RegisterForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");
  const [submitData, setsubmitData] = useState(null);

  const clickRegister = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmitData({ fName, lName });
  };

  return (
    <div>
      <button onClick={clickRegister}>Register</button>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {submitData && <RegistrationDisplay data={submitData} />}
    </div>
  );
}

export default RegisterForm;
