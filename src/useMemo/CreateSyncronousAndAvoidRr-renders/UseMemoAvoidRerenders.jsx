import { useEffect, useMemo, useState } from "react";

const CodeFlowV1 = () => {
  const [counter, setCounter] = useState(0);

  const newVal = useMemo(() => {
    console.log("UseMemo with counter", counter);
    return counter + 1;
  }, [counter]);

  useEffect(() => {
    console.log("UseEffect with counter: ", counter);
  }, [counter]);

  console.log("Direct counter: ", counter, newVal);

  return (
    <div>
      <p onClick={() => setCounter((val) => val + 1)}>{counter}</p>
    </div>
  );
};

export default CodeFlowV1;
