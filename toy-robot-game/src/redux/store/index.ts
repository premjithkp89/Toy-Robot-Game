import { configureStore } from "@reduxjs/toolkit";
import placeRobotReducer from "../reducers/inputReducer";

export const store = configureStore({
  reducer: {
    placeRobot: placeRobotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
