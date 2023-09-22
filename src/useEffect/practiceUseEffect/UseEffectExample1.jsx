import { useState } from "react";
import { useEffect } from "react";

const UseEffectExample1 = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount((prev) => prev - 1);
  };
  useEffect(() => {
    console.log("first render");
  }, []);
  return (
    <>
      <div>UseEffectExample1</div>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>Decrement</button>
      <p>{count}</p>
    </>
  );
};

export default UseEffectExample1;
