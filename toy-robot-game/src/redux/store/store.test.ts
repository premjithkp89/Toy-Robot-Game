import { store } from ".";

describe("Robot Game redux state tests", () => {
  it("Should initially set show robot state to false", () => {
    const state = store.getState().placeRobot;
    expect(state.showrobot).toBeFalsy();
  });
  it("Should initially set direction state to empty", () => {
    const state = store.getState().placeRobot;
    expect(state.direction).toEqual("");
  });
  it("Should initially set x-cordinates state to 0", () => {
    const state = store.getState().placeRobot;
    expect(state.xCordinate).toEqual(0);
  });
  it("Should initially set y-cordinates state to 0", () => {
    const state = store.getState().placeRobot;
    expect(state.yCordinate).toEqual(0);
  });
  it("Should initially set rows state to -1", () => {
    const state = store.getState().placeRobot;
    expect(state.row).toEqual(-1);
  });
  it("Should initially set colums state to -1", () => {
    const state = store.getState().placeRobot;
    expect(state.column).toEqual(-1);
  });
  it("Should initially set the angle to zero", () => {
    const state = store.getState().placeRobot;
    expect(state.angle).toEqual(0);
  });
});
