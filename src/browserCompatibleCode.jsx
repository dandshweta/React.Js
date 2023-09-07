React.createElement(
  "div",
  { style: { backgroundColor: "tomato", width: "300px", padding: 12 } },
  React.createElement("p", null, "Counter : ", counterVal),
  React.createElement(
    "div",
    { style: { display: "flex", gap: 12 } },
    React.createElement(
      "button",
      { onClick: () => setCounterVal((prevCount) => prevCount + 1) },
      "Increment"
    ),
    React.createElement(
      "button",
      { onClick: () => setCounterVal((prevCount) => prevCount - 1) },
      "Decrement"
    )
  ),
  React.createElement("p", null, "So the number so far is : ", counterVal),
  React.createElement("p", null, "So the number so far is 2 : ", counterVal),
  React.createElement("p", null, "So the number so far is 3 : ", counterVal),
  React.createElement("p", null, "So the number so far is 4 : ", counterVal),
  React.createElement("p", null, "So the number so far is 5 : ", counterVal),
  React.createElement("p", null, "So the number so far is 6 : ", counterVal),
  React.createElement("p", null, "So the number so far is 7 : ", counterVal)
);
