import { useState } from "react";

const WithoutMemo = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  console.log("render");

  return (
    <>
      <div>withoutMemo</div>
      <div>{count}</div>
      <button onClick={increament}>Click</button>
    </>
  );
};

export default WithoutMemo;
