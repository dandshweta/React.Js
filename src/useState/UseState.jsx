// import { useState } from "react";

// const UseState = () => {
//   const [name1, setName] = useState("");

//   return (
//     <>
//       <p>my name is {name1}</p>
//       <div>UseState</div>
//       <input
//         type="text"
//         value={name1}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       ></input>
//       <button type="submit" onClick={}>submit</button>
//     </>
//   );
// };

// export default UseState;

import { useState } from "react";

const UseState = () => {
  const [name1, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name1);
  };

  return (
    <>
      <p>My name is {submittedName}</p>
      <div>UseState</div>
      <input
        type="text"
        value={name1}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default UseState;
