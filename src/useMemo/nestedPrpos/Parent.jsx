import { useState } from "react";
import ChildV1 from "./2.Child";

const ParentV1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p onClick={() => setCounter((val) => val + 1)}>{counter}</p>
      <ChildV1
        data={[
          { id: 1, title: "ABC" },
          { id: 2, title: "ABC1" },
          { id: 3, title: "ABC2" },
          { id: 4, title: "ABC3" },
          { id: 5, title: "ABC4" },
          { id: 6, title: "ABC5" },
        ]}
      />
    </div>
  );
};

export default ParentV1;
