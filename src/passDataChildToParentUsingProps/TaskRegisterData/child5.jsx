function RegistrationDisplay({ data }) {
  return (
    <div>
      <h2>Registration Details:</h2>
      <p>First Name: {data.fName}</p>
      <p>Last Name: {data.lName}</p>
    </div>
  );
}

export default RegistrationDisplay;
