import { useState } from "react";
import ChildV1 from "./ChildV1";
import ChildV2 from "./ChildV2";

const ParentDay15 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle Component
      </button>

      {toggle ? <ChildV1 /> : <ChildV2 />}
    </div>
  );
};

export default ParentDay15;
