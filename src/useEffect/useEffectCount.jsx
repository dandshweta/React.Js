import { useEffect } from "react";
import { useState } from "react";
const UseEffectCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <>
      <div>useEffectCount</div>
      <p>{count}</p>
    </>
  );
};

export default UseEffectCount;
