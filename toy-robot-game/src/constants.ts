export interface InputState {
  xCordinate: number;
  yCordinate: number;
  row: number;
  column: number;
  wallRow: number;
  wallColumn: number;
  direction: string;
  angle: number;
  showrobot: boolean;
  showReport: boolean;
  wallMap: { [key: string]: boolean };
}

export const initialState: InputState = {
  xCordinate: 0,
  yCordinate: 0,
  row: -1,
  column: -1,
  wallRow: -1,
  wallColumn: -1,
  direction: "",
  angle: 0,
  showrobot: false,
  showReport: false,
  wallMap: { "": false },
};

export enum DIRECTIONS {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}

export enum COMMANDS {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  MOVE = "MOVE",
  PLACE = "PLACE",
  PLACE_WALL = "PLACE_WALL",
  REPORT = "REPORT",
}

export const ROW_VALUES = [1, 2, 3, 4, 5];

export const COLUMN_VALUES = [1, 2, 3, 4, 5];

export const DIRECTION_VALUES = ["NORTH", "SOUTH", "EAST", "WEST"];

export const ROW_COUNT = 5;
export const COL_COUNT = 5;
