import { memo } from "react";

const ChildV1 = (props) => {
  console.log(props);

  return (
    <div>
      <p>I am child</p>
      {props.data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.dataPoints.length === newProps.dataPoints.length &&
    oldProps.dataPoints.every((oldPoint, index) => {
      const newPoint = newProps.dataPoints[index];
      return oldPoint.x === newPoint.x && oldPoint.y === newPoint.y;
    })
  );
}

const ChildComp = memo(ChildV1, arePropsEqual);
export default ChildComp;
