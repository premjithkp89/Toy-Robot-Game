import robot from "../../images/robot.png";

export const RobotImg = (x: any, y: any, angle: any) => {
  console.log("position", x, y);

  return (
    <div
      style={{
        backgroundImage: `url(${robot})`,
        backgroundSize: "contain",
        transform: `rotate(${angle}deg)`,
        width: 70,
        height: 70,
        position: "absolute",
        left: `${x + 5}px`,
        top: `${y + 5}px`,
      }}
    ></div>
  );
};
