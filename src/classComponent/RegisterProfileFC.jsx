import { useState } from "react";

function RegisterProfileFC() {
  const [uName, setUName] = useState("Gunjan Bajaj");
  const [uEmail, setUEmail] = useState("gunjan.bajaj212@google.com");
  const [uCity, setUCity] = useState("Pune");

  return (
    <div>
      <h1>My Profile</h1>

      <div>
        <div className="form-element">
          <p>Name - {uName}</p>
          <input
            type="text"
            value={uName}
            onChange={(e) => setUName(e.target.value)}
          />
        </div>
        <div className="form-element">
          <p>Email - {uEmail}</p>
          <input
            type="email"
            value={uEmail}
            onChange={(e) => setUEmail(e.target.value)}
          />
        </div>
        <div className="form-element">
          <p>City - {uCity}</p>
          <input
            type="text"
            value={uCity}
            onChange={(e) => setUCity(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterProfileFC;
