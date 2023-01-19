const directionMap: any = {
  LEFT: { NORTH: "WEST", WEST: "SOUTH", SOUTH: "EAST", EAST: "NORTH" },
  RIGHT: { NORTH: "EAST", WEST: "NORTH", SOUTH: "WEST", EAST: "SOUTH" },
};

export const getDirection = (command: any, direction: any): string => {
  return directionMap[command][direction];
};

export const getAngleFromDirection = (direction: any): number => {
  switch (direction) {
    case "NORTH":
      return 0;
    case "EAST":
      return 90;

    case "SOUTH":
      return 180;

    case "WEST":
      return 270;
    default:
      return 90;
  }
};
