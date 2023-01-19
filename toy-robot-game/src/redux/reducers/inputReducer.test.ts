import { store } from "../store";
import { setAngle, setDirection, setShowRobot } from "./inputReducer";

describe("Test reducer actions", () => {
  const robotValue = true;
  const direction = "NORTH";
  const facing = "RIGHT";
  it("Should change showRobot from false to true", () => {
    store.dispatch(setShowRobot({ showRobot: robotValue }));
    let state = store.getState().placeRobot;
    expect(state.showrobot).toBeTruthy();
  });

  it("Should set the direction state to NORTH", () => {
    store.dispatch(setDirection({ direction: direction }));
    let state = store.getState().placeRobot;
    expect(state.direction).toEqual(direction);
  });

  it("Should add 90 degree to angle when facing RIGHT", () => {
    const currentAngle = store.getState().placeRobot.angle;
    store.dispatch(setAngle({ facing: facing }));
    let state = store.getState().placeRobot;
    expect(state.angle).toEqual(currentAngle + 90);
  });

  it("Should minus 90 degree to angle when facing LEFT", () => {
    const currentAngle = store.getState().placeRobot.angle;
    store.dispatch(setAngle({ facing: "LEFT" }));
    let state = store.getState().placeRobot;
    expect(state.angle).toEqual(currentAngle + -90);
  });
});
