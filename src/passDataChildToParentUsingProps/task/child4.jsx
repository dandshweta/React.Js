const openPopup = () => {
  const popup = window.open("", "RegistrationPopup", "width=400,height=300");

  popup.document.write(
    `<html><body>
        <h2>Registration Form</h2>
        <form id="registrationForm">
          <label>First Name:</label>
          <input type="text" id="firstName" /><br />
          <label>Last Name:</label>
          <input type="text" id="lastName" /><br />
          <button type="button" onclick="submitForm()">Submit</button>
        </form>
        <script>
          function submitForm() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            window.opener.displayData(firstName, lastName);
            window.close();
          }
        </script>
      </body></html>`
  );
};
export default openPopup;
