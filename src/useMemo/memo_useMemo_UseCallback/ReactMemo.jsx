import { useState, memo } from "react";
const ExReactMemo = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
    console.log("render");
  };
  // console.log("render-out");
  return (
    <>
      <div>ReactMemo</div>
      <div>{count}</div>
      <button onClick={incrementCount}>Click</button>
    </>
  );
};
const ReactMemo = memo(ExReactMemo);
export default ReactMemo;
