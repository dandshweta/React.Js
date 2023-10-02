import { useState } from "react";
import Childprop from "./child";

function Parentprop() {
  const [Open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!Open);
  };
  return (
    <>
      <div>
        <h1>click the button</h1>
        <button onClick={toggle}>clickme</button>
        {Open && (
          <Childprop
            onClose={() => {
              setOpen(false);
            }}
          />
        )}
        {/* {console.log('Data:',Data)} */}
      </div>
    </>
  );
}
export default Parentprop;
