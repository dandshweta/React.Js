import { useState } from "react";
import Child from "./child1";

export default function Parent() {
  const [state, setState] = useState({});
  const callback = (payload) => {
    setState(payload);

    console.log(state);
  };

  return (
    <div>
      <h1>Hello from Parent</h1>
      <Child callback={callback} />
    </div>
  );
}
