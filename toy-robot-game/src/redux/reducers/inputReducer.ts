import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDirection,
  getAngleFromDirection,
} from "../../helpers/directionMapper";

export interface InputState {
  xCordinate: number;
  yCordinate: number;
  row: number;
  column: number;
  direction: string;
  angle: number;
  showrobot: boolean;
}

const initialState: InputState = {
  xCordinate: 1,
  yCordinate: 1,
  row: 1,
  column: 1,
  direction: "",
  angle: 0,
  showrobot: false,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    // placeRobot: (state, action: PayloadAction<any>) => {
    //   state.xCordinate = action.payload.x;
    //   state.yCordinate = action.payload.y;
    //   state.angle = 90;
    // },

    setXOffset: (state, action: PayloadAction<any>) => {
      state.xCordinate = action.payload.xCordinate;
    },
    setYOffset: (state, action: PayloadAction<any>) => {
      state.yCordinate = action.payload.yCordinate;
    },
    setRowNumber: (state, action: PayloadAction<any>) => {
      state.row = action.payload.row;
    },
    setColNumber: (state, action: PayloadAction<any>) => {
      state.column = action.payload.col;
    },
    setDirection: (state, action: PayloadAction<any>) => {
      state.direction = action.payload.direction;
      state.angle = getAngleFromDirection(action.payload.direction);
    },
    setAngle: (state, action: PayloadAction<any>) => {
      state.angle =
        action.payload.facing === "RIGHT" ? state.angle + 90 : state.angle - 90;
      state.direction = getDirection(action.payload.facing, state.direction);
    },
    setShowRobot: (state, action: PayloadAction<any>) => {
      state.showrobot = action.payload.showRobot;
      state.angle = getAngleFromDirection(state.direction);
    },
  },
});

export const {
  setXOffset,
  setYOffset,
  setRowNumber,
  setColNumber,
  setDirection,
  setAngle,
  setShowRobot,
} = inputSlice.actions;

export default inputSlice.reducer;