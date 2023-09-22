import { useState } from "react";
import openPopup from "./child4";

function ParentComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  window.displayData = (firstName, lastName) => {
    setFirstName(firstName);
    setLastName(lastName);
  };

  return (
    <div>
      <button onClick={openPopup}>Register</button>
      {firstName && lastName && (
        <div>
          <h2>Registration Details:</h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
        </div>
      )}
    </div>
  );
}

export default ParentComponent;
