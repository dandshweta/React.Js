import { useState } from "react";
const Example = () => {
  const [num, setNum] = useState(10);
  return (
    <>
      <div>example</div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 2)}>Incre</button>
      <button onClick={() => setNum(num - 2)}>Decre</button>
    </>
  );
};

export default Example;
