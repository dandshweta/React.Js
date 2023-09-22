const Child = ({ callback }) => {
  const state = {
    example: "👋",
  };

  const handleCallback = () => callback(state);

  return <button onClick={handleCallback}>Pass data to parent</button>;
};
export default Child;
