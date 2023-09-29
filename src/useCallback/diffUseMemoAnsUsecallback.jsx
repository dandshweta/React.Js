import { useCallback, useMemo, useState } from "react";
import ChildCompV2 from "./6.childv2";

const ParentV2 = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  console.log("Parent-Re-Render");

  const onIncrement = () => {
    setCounter((count) => count + 1);
  };

  const onIncrementV2 = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);
  const onIncrementV3 = useMemo(() => {
    setCounter((count) => count + 1);
  }, []);

  console.log("onIncrementV2 with useCallback: ", onIncrementV2);
  console.log("onIncrementV2 with useMemo: ", onIncrementV3);

  return (
    <div>
      <p>Counter: {counter}</p>
      <ChildCompV2 name={name} onIncrement={onIncrementV2} />
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default ParentV2;


import { memo } from "react";

const ChildV2 = (props) => {
  console.log("Child-Re-Render", props);

  return (
    <>
      <p>Counter Child: {props.name}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </>
  );
};

const ChildCompV2 = memo(ChildV2);
export default ChildCompV2;
