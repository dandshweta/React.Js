import { useState } from "react";

const Example3 = () => {
  const [color, setColor] = useState({
    red: true,
    green: true,
    purple: true,
    pink: true,
  });
  const onInput = (e) => {
    const { name, checked } = e.target;
    setColor((prevState) => ({ ...prevState, [name]: checked }));
  };
  return (
    <>
      <div>example3</div>
      <div>
        <input
          type="checkbox"
          name="red"
          checked={color.red}
          onChange={onInput}
        ></input>
        <label>Red</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="green"
          checked={color.green}
          onChange={onInput}
        ></input>{" "}
        <label>Green</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="purple"
          checked={color.purple}
          onChange={onInput}
        ></input>{" "}
        <label>purple</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="pink"
          checked={color.pink}
          onChange={onInput}
        ></input>{" "}
        <label>Pink</label>
      </div>
      <p>Magic massage</p>
      <p>{color}</p>
    </>
  );
};

export default Example3;
