import ChildTask from "./ChildTask";

const ParentTask = () => {
  return (
    <>
      <div>
        <ChildTask name="shweta" city="pune" />
      </div>
    </>
  );
};

export default ParentTask;
