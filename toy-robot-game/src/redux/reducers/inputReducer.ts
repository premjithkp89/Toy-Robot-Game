import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDirection,
  getAngleFromDirection,
} from "../../helpers/directionMapper";

import { initialState } from "../../constants";

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
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
    setWallRowNumber: (state, action: PayloadAction<any>) => {
      state.wallRow = action.payload.wallRow;
    },
    setWallColNumber: (state, action: PayloadAction<any>) => {
      state.wallColumn = action.payload.wallCol;
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
    setShowReport: (state, action: PayloadAction<any>) => {
      state.showReport = action.payload.showReport;
    },

    setWallMap: (state, action: PayloadAction<any>) => {
      if (
        `${state.row}-${state.column}` !==
        `${state.wallRow}-${state.wallColumn}`
      )
        state.wallMap[`${state.wallRow}-${state.wallColumn}`] = true;
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
  setShowReport,
  setWallMap,
  setWallRowNumber,
  setWallColNumber,
} = inputSlice.actions;

export default inputSlice.reducer;
