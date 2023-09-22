import { useState } from "react";

const FormsV3 = () => {
  const [familyHistory, setFamilyHistory] = useState({
    parenting: true,
    sibling: true,
  });

  const onInputChange = (e) => {
    const { checked, name } = e.target;

    // Way 1
    //setFamilyHistory({ ...familyHistory, [name]: checked });

    // way 2
    setFamilyHistory((prevState) => ({ ...prevState, [name]: checked }));
  };

  console.log("FamilyHistory: ", familyHistory);

  return (
    <div>
      <div className="form-element">
        <input
          type="checkbox"
          name="parenting"
          checked={familyHistory.parenting}
          onChange={onInputChange}
        />{" "}
        <label>Parenting</label>
      </div>
      <div className="form-element">
        <input
          type="checkbox"
          name="sibling"
          onChange={onInputChange}
          checked={familyHistory.sibling}
        />{" "}
        <label>Sibling</label>
      </div>
    </div>
  );
};

export default FormsV3;
