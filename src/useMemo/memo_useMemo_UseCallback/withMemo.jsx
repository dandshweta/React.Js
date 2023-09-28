// import { useState, memo } from "react";

// const WithMemo = () => {
//   const [count, setCount] = useState(0);
//   const increament = () => {
//     setCount(count + 1);
//   };
//   console.log("render");

//   return (
//     <>
//       <div>withMemo</div>
//       <div>{count}</div>
//       <button onClick={increament}>Click</button>
//     </>
//   );
// };

// const ExwithMemo = memo(WithMemo);
// export default ExwithMemo;
import { useState, memo } from "react";
import CompWithMemo from "./CompWithMemo";

const WithMemo = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  console.log("Component rendered"); // This logs only when the component initially renders

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <CompWithMemo />
      </div>
    </>
  );
};
const ExwithMemo = memo(WithMemo);
export default ExwithMemo;
