import { useEffect, useState } from "react";

function ComponentWithDependencyEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default ComponentWithDependencyEffect;
