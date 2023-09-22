import { useState } from "react";

function Example6() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = () => {
    if (activeButton < 3) {
      setActiveButton(activeButton + 1);
    }
    //  else {
    //   setActiveButton(0); // Reset to the first button when the last button is clicked
    // }
  };

  return (
    <div>
      <button onClick={handleButtonClick} disabled={activeButton !== 0}>
        Button 1
      </button>
      <button onClick={handleButtonClick} disabled={activeButton !== 1}>
        Button 2
      </button>
      <button onClick={handleButtonClick} disabled={activeButton !== 2}>
        Button 3
      </button>
      <button onClick={handleButtonClick} disabled={activeButton !== 3}>
        Button 4
      </button>
      <p>
        {/* {activeButton === 3 ? "Done!" : "Please click the buttons in order."} */}
        {activeButton === 3 && <p>Done!</p>}
      </p>
    </div>
  );
}

export default Example6;
