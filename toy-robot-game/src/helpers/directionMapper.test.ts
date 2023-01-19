import { getDirection } from "./directionMapper";

describe("Test direction mapper", () => {
  it("Should give the correct direction when turning LEFT", () => {
    expect(getDirection("LEFT", "NORTH")).toEqual("WEST");
    expect(getDirection("LEFT", "EAST")).toEqual("NORTH");
    expect(getDirection("LEFT", "SOUTH")).toEqual("EAST");
    expect(getDirection("LEFT", "WEST")).toEqual("SOUTH");
  });

  it("Should give the correct direction when turning RIGHT", () => {
    expect(getDirection("RIGHT", "NORTH")).toEqual("EAST");
    expect(getDirection("RIGHT", "EAST")).toEqual("SOUTH");
    expect(getDirection("RIGHT", "SOUTH")).toEqual("WEST");
    expect(getDirection("RIGHT", "WEST")).toEqual("NORTH");
  });
});
