import { useState } from "react";
import ChildUI from "./ChildUI";
import ChildUIV2 from "./ChildUI2";

const ParentUI = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    //setShowMessage((val) => !val);
    setShowMessage(!showMessage);
  };
  return (
    <>
      {/* {showMessage && <p>I am visible Now</p>} */}
      {showMessage ? <p>I am visible</p> : <p>I a hidden</p>}
      {/* <button onClick={toggleMessage}>Toggle Message</button> */}

      <ChildUI onToggle={toggleMessage} />
      <ChildUIV2 onToggle={toggleMessage} />
    </>
  );
};

export default ParentUI;
